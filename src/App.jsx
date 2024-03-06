import { useEffect } from "react";
import "./App.css";

import HeaderViewModule from "./components/HeaderViewModule.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import DetailedPostViewPage from "./components/DetailedPostViewPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { fetchFirstContact } from "./utils/api.js";

function App() {
  // Simulating the current logged in user
  useEffect(() => {
    fetchFirstContact();
  }, []);

  return (
    <>
      <body>
        <HeaderViewModule />
        <div className="container">
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route
                path="post/view/:id"
                element={<DetailedPostViewPage />}
              ></Route>
            </Routes>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
