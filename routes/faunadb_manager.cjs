const faunadb = require("faunadb");
const q = faunadb.query;

let secret = process.env.FAUNADB_SECRET;
let endpoint = process.env.FAUNADB_ENDPOINT;

if (typeof secret === "undefined" || secret === "") {
  console.error("Fauna secret not found. Exiting.");
  process.exit(1);
}

if (!endpoint) endpoint = "https://db.fauna.com/";

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
}

const faunaDriver = new FaunaDriver();
module.exports = faunaDriver;
