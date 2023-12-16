import faunadb from "faunadb";
import { CreateUser } from "../../../Models/User.js";

const q = faunadb.query;
const {
  Abort,
  Call,
  Collection,
  ContainsStrRegex,
  CurrentIdentity,
  Create,
  Delete,
  Do,
  Get,
  GTE,
  Identify,
  If,
  Index,
  IsEmpty,
  Length,
  Let,
  Login,
  Logout,
  Match,
  Paginate,
  Select,
  Var,
} = q;

const RegisterUser = (userObject) => {
  const RegisterFQL = Let(
    {
      user: CreateUser(userObject.name),
      account: Select(
        ["ref"],
        Create(Collection("accounts"), {
          data: {
            email: userObject.email,
            user: Select(["ref"], Var("user")),
          },
        })
      ),
      secret: Login(Var("account"), { password: userObject.password }),
    },
    Do({
      user: q.Var("user"),
      account: q.Var("account"),
      secret: q.Var("secret"),
    })
  );

  // TODO: Rate Limiting
};

const LoginByEmail = (email, password) => {
  const loginFQL = If(
    Identify(Match(Index("accounts_by_email"), email), password),
    Do(
      Let(
        {
          rateLimitingPage: Paginate(
            Match(Index("rate_limiting_action_and_identity"), "login", email)
          ),
        },
        If(
          IsEmpty(Var("rateLimitingPage")),
          true,
          Delete(Select([0], Var("rateLimitingPage")))
        )
      ),
      Let(
        {
          res: Login(Match(Index("accounts_by_email"), email), {
            password: password,
          }),

          // Return Token and Account / User Info
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
    ),
    false
  );

  // Add Rate Limiting
};

const LogoutUser = async (client) => {
  return await client.query(Logout(true));
};

export { LoginByEmail, RegisterUser, LogoutUser };
