import { useContext, useEffect } from "react";
import { SessionContext } from "../../Context/session.jsx";
import { useCookies } from "react-cookie";

const Logout = () => {
  // State
  const [cookie, setCookie, removeCookie] = useCookies(["auth"]);
  const session = useContext(SessionContext);

  useEffect(() => {
    removeCookie("auth", { path: "/" });
    window.location.replace("/");
  }, []);
};

export default Logout;
