import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    const [page, setPage] = useState("home");

    return (
        <div className="container">
            <Header />
            <Navigation page={page} />

            <Routes>
                <Route path="/" element={<HomePage setPage={setPage} />} />
                <Route
                    path="/profile"
                    element={<ProfilePage setPage={setPage} />}
                />
            </Routes>
        </div>
    );
}

export default App;
