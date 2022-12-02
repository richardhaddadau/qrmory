// import { useCookies } from "react-cookie";
import { createContext, useContext } from "react";

// const [cookies, setCookie, removeCookie] = useCookies(["auth-session"]);

export const SessionContext = createContext({
  user: null,
  account: null,
  token: null,
});
