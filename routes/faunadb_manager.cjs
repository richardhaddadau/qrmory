const faunadb = require("faunadb");
const q = faunadb.query;

let secret = process.env.FAUNADB_SECRET;
let endpoint = process.env.FAUNADB_ENDPOINT;

if (typeof secret === "undefined" || secret === "") {
  console.error("Fauna secret not found. Exiting.");
  process.exit(1);
}

if (!endpoint) endpoint = "https://db.fauna.com/";

const config = {
  free_user_quota: 10,
};

const rateLimitConfig = {
  login: {
    calls: 3, // TODO: Successful login should reset this
    perSeconds: 0,
  },

  register: {
    calls: 10, // 10 Users per 10 Minutes
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
      secret: token || secret,
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

  GetDocuments = async (collection) => {
    let allDocuments;

    await this.client
      .query(q.Paginate(q.Documents(q.Collection(collection))))
      .then((result) => (allDocuments = result));

    return allDocuments;
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

  Login = async (userObject) => {
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

  Register = async (newUserObject) => {
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
}

const faunaDriver = new FaunaDriver();
module.exports = faunaDriver;
