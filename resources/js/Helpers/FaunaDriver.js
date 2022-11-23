import faunadb from "faunadb";
import { comprssed } from "../Helpers/ComprssIt";

const q = faunadb.query;
const faunaKey = import.meta.env.VITE_FAUNA_KEY;

const config = {
  free_user_quota: 10,
};

const rateLimitConfig = {
  login: {
    calls: 3, // Login will reset this
    perSeconds: 0,
  },
  register: {
    calls: 10, // 10 Users Per 10 Minutes
    perSeconds: 10 * 1000,
  },
};

class FaunaDriver {
  constructor(token) {
    this.headers = {
      "content-type": "application/json",
    };
    this.domain = "db.fauna.com";
    this.port = 443;
    this.scheme = "https";

    // Client Config
    this.client = new faunadb.Client({
      headers: this.headers,
      domain: this.domain,
      port: this.port,
      scheme: this.scheme,
      secret: token || faunaKey,
    });
  }

  handleError = (value) => {
    console.error(
      "Error: [%s] %s: %s",
      value.name,
      value.message,
      value.errors()[0].description
    );
  };

  GetRateLimitingConfig = (process) => {
    const config = rateLimitConfig[process];

    if (config) {
      return config;
    } else {
      throw new Error(`No rate limiting configuration defined for ${process}.`);
    }
  };

  GetAllRateLimiting = async () => {};

  GetRateLimitingByIP = async (ipValue) => {
    let result;

    await this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("rate_limiting_by_ip"), ipValue)),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      .then((res) => {
        result = res["data"];
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return result ? result : false;
  };

  GetAccounts = async () => {
    let users = [];

    await this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("all_accounts"))),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      .then((res) => {
        users = res;
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return users;
  };

  GetAccountsByEmail = async (email) => {
    let user;

    await this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("accounts_by_email"), email)),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      .then((res) => (user = res["data"]))
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return user.length > 0 ? user : false;
  };

  RegisterNewUsers = async (newUserObject) => {
    const newName = newUserObject.name;
    const newEmail = newUserObject.email;
    const newPassword = newUserObject.password;

    let userFound = false;
    let users = await this.GetAccounts();
    let userId = "";

    for (let user of users["data"]) {
      if (newEmail === user["data"]["email"]) {
        userFound = true;
      }
    }

    if (!userFound) {
      await this.client
        .query(
          q.Let(
            {
              user: q.Create(q.Collection("users"), {
                data: {
                  name: newName,
                  teamId: null,
                  user_level: 0,
                  codes_used: 0,
                  codes_quota: config.free_user_quota,
                  verified: false,
                  activated: true,
                  deleted: false,
                },
              }),
              account: q.Select(
                ["ref"],
                q.Create(q.Collection("accounts"), {
                  credentials: {
                    password: newPassword,
                  },
                  data: {
                    email: newEmail,
                    userId: q.Select(["ref"], q.Var("user")),
                  },
                })
              ),
              secret: q.Login(q.Var("account"), {
                password: newPassword,
              }),
            },
            q.Do({
              user: q.Var("user"),
              account: q.Var("account"),
              secret: q.Var("secret"),
            })
          )
        )
        .then((res) => console.log(res));

      return true;
    } else {
      return false;
    }
  };

  LoginUser = async (userObject) => {
    if (!userObject.email) return undefined;
    if (!userObject.password) return undefined;

    const userEmail = userObject.email;
    const userPassword = userObject.password;

    let loggedUser;

    await this.client
      .query(
        q.Let(
          {
            res: q.Login(q.Match(q.Index("accounts_by_email"), userEmail), {
              password: userPassword,
            }),
            account: q.Get(q.Select(["instance"], q.Var("res"))),
            user: q.Get(q.Select(["data", "userId"], q.Var("account"))),
            secret: q.Select(["secret"], q.Var("res")),
          },
          {
            account: q.Var("account"),
            user: q.Var("user"),
            secret: q.Var("secret"),
          }
        )
      )
      .then((res) => {
        loggedUser = res;

        if (res) {
          this.client = new faunadb.Client({
            headers: this.headers,
            domain: this.domain,
            port: this.port,
            scheme: this.scheme,
            secret: res["secret"],
          });
        }
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return loggedUser;
  };

  LogOut = async () => {
    let logoutRes;

    await this.client
      .query(q.Logout(true))
      .then((res) => (logoutRes = res))
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return logoutRes;
  };

  GetCurrentUser = async () => {
    let thisUser;

    await this.client.query(q.CurrentIdentity).then((res) => console.log(res));
  };

  GenerateNewLink = async (temporary, sendBack) => {
    let newRef;
    const getNow = Date.now();
    const newLink = comprssed;
    await newLink.Compress(getNow, 8);
    newLink.link = `https://qrmory.com/visit/${newLink.slug}`;

    await this.client
      .query(
        q.Create(q.Collection("links"), {
          data: {
            slug: newLink.slug,
            link: newLink.link,
            title: newLink.title,
            clicks: 0,
            temporary: temporary,
            deleted: false,
          },
        })
      )
      .then(async (res) => {
        newRef = res["ref"]["value"]["id"];
        await newLink.Compress(newRef, 8);
        newLink.link = `https://qrmory.com/visit/${newLink.slug}`;

        await this.client.query(
          q.Update(q.Ref(q.Collection("links"), newRef), {
            data: {
              slug: newLink.slug,
              link: newLink.link,
            },
          })
        );
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return sendBack ? [newLink.link, newRef] : null;
  };

  GetLinks = async () => {
    let links = [];

    await this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("all_links"))),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      .then((res) => {
        links = res;
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return links;
  };

  GetLinkBySlug = async (searchUrl) => {
    let found = [];

    await this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("link_by_slug"), searchUrl)),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      )
      .then((res) => {
        found = res;
      })
      .catch((err) => {
        this.handleError(err);
        return false;
      });

    return found;
  };
}

const faunaDriver = new FaunaDriver();
export { faunaDriver };
