import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";

import "../css/App.css";

import Welcome from "./Pages/Welcome";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import CookiePolicy from "./Pages/CookiePolicy.jsx";
import HelpCenter from "./Pages/Support/HelpCenter.jsx";
import Pricing from "./Pages/Pricing.jsx";
import PasswordReset from "./Pages/Auth/PasswordReset.jsx";

ReactGA.initialize("G-SG52HNQMDP");

const App = () => {
  if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        {/*<Route path="/sign-up" element={<Register />} />*/}
        <Route path="/sign-up" element={<Register />} />
        {/*<Route path="/reset" element={<PasswordReset />} />*/}
        <Route path="/reset" element={<PasswordReset />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Policies */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Support */}
        <Route path="/help" element={<HelpCenter />} />

        {/* Standard */}
        <Route path="/pricing" element={<Pricing />} />
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </ClerkProvider>
  );
};

const WrApped = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export { App, WrApped };
