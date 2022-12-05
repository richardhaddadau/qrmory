import { useContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "../css/App.css";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

import { SessionContext } from "./Context/session.jsx";
import { CookiesProvider } from "react-cookie";
import Logout from "./Pages/Auth/Logout.jsx";

const App = () => {
  return (
    <SessionContext.Provider value={{ user: {}, account: null, token: null }}>
      <Routes>
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*{user ? <Route path="/dashboard" element={<Dashboard />} /> : null}*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </SessionContext.Provider>
  );
};

const Wrapped = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export { App, Wrapped };
