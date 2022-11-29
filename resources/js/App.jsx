import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "../css/App.css";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { SessionProvider, sessionReducer } from "./Context/session.js";

const App = () => {
  // States
  const [state, dispatch] = React.useReducer(sessionReducer, { user: null });
  const { user } = state;

  return (
    <SessionProvider value={{ state, dispatch }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user ? <Route path="/dashboard" element={<Dashboard />} /> : null}
        <Route path="/" element={<Welcome />} />
      </Routes>
    </SessionProvider>
  );
};

const Wrapped = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export { App, Wrapped };
