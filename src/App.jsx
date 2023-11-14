import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

// api
import { getContact } from "./utilities/api";

function App() {
    const [page, setPage] = useState("home");
    const [user, setUser] = useState({});

    useEffect(() => {
        getContact(1).then((data) => setUser(data));
    }, []);

    return (
        <div className="container">
            <Header user={user} />
            <Navigation page={page} />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage setPage={setPage} user={user} />}
                />
                <Route
                    path="/profile"
                    element={<ProfilePage setPage={setPage} />}
                />
            </Routes>
        </div>
    );
}

export default App;
