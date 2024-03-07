import { useEffect, useState } from "react";
import "./App.css";

import HeaderViewModule from "./components/HeaderViewModule.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import DetailedPostViewPage from "./components/DetailedPostViewPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { fetchLoggedinContact } from "./utils/api.js";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // Simulating the current logged in user
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchLoggedinContact();
    if (response) {
      setLoggedInUser(response);
    } else {
      console.error("OBS!!! Something went wrong getting the logged in user");
    }
  };

  const handleSave = () => {
    fetchData();
  };

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
              <Route
                path="/profile/:id"
                element={<ProfilePage handleSave={handleSave} />}
              ></Route>
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
