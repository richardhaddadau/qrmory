import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css";

import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

const WrApped = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export { App, WrApped };
