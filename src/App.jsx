import { useState } from "react";
import "./App.css";

import HeaderViewModule from "./components/HeaderViewModule.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

//temp before component
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <body>
        <HeaderViewModule />
        <div className="container">
          <aside>
            <div className="sidebar">
              <Link to="/">
                <span className="material-symbols-outlined">Home</span>
                <h3>Home</h3>
              </Link>
              <Link to="/profile">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                <h3>Profile</h3>
              </Link>

              <a href="#">
                <span className="material-symbols-outlined">logout</span>
                <h3>Logout</h3>
              </a>
            </div>
          </aside>

          <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
