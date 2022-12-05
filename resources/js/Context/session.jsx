import { useCookies } from "react-cookie";
import { createContext, useContext } from "react";

export const SessionContext = createContext({
  user: {},
  account: {},
});

const session = useContext(SessionContext);
const [cookies, setCookie, removeCookie] = useCookies([
  "auth_id",
  "auth_token",
  "multi_auth",
]);

const CreateSession = (newId, newToken) => {
  if (cookies.auth_id) {
    // Remove current authorisation information if exists
    removeCookie("auth_id");
    removeCookie("auth_token");
  }

  // Add new authorisation information to multi_auth cookie
  setCookie("multi_auth", [
    ...cookies.multi_auth,
    { id: newId, token: newToken },
  ]);

  // Set cookies with new authorisation information
  setCookie("auth_id", newId);
  setCookie("auth_token", newToken);
  // TODO: If !exist => Create Cookie for Multi-User Array, else => add on: multi_auth,
  // TODO: Create Cookie for Authorized Account ID: auth_id
  // TODO: Create Cookie for Authorized Token: auth_token
  // TODO: Create Local Storage for QR Codes for account: qrcodes_obj
  // TODO: Create Session Context with User, Account
};

const UpdateSession = (newAuth = null, newQRList = [], newContext = null) => {
  if (newAuth) {
    // TODO: newAuth should be an index in multi_auth array
    // TODO: Create Cookie for Authorized Account ID: auth_id
    // TODO: Create Cookie for Authorized Token: auth_token
  }
  // TODO: If !exist => Create Cookie for Multi-User, else => add on: multi_auth,

  if (newQRList) {
    // TODO: Create Local Storage for QR Codes for account: qrcodes_obj
  }

  if (newContext) {
    // TODO: Create Session Context with User, Account
  }
};

const KillSession = () => {
  // TODO: Get Cookie: auth_id
  // TODO: Delete Entry in Cookie with auth_id: multi_auth
  // TODO: Get Cookie: auth_id
  // TODO: Delete Cookie: auth_token
  // TODO: Delete Local Storage for QR Codes for account: qr_codes_obj
  // TODO: Clear Session Context
};

export { CreateSession, UpdateSession, KillSession };
