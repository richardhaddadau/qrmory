import {HashRouter, Routes, Route} from 'react-router-dom';
import "../css/App.css";

import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome />} />
    </Routes>
  );
}

const WrApped = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

export { App, WrApped };
