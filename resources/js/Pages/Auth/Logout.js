import { useContext } from "react";
import { SessionContext } from "../../Context/session.jsx";

const { session } = useContext(SessionContext);
window.history.push("/");
