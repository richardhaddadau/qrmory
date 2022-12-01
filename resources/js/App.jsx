import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../css/App.css";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import CookiePolicy from "./Pages/CookiePolicy.jsx";
import HelpCenter from "./Pages/Support/HelpCenter.jsx";

const App = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Policies */}
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />

      {/* Support */}
      <Route path="/help" element={<HelpCenter />} />

      {/* Standard */}
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

const WrApped = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export { App, WrApped };
