import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { HeaderBar } from "./components/HeaderBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { PostsListPage } from "./components/Main/PostsListPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { createContext, useEffect, useState } from "react";
import { getRequest } from "./utilites/apiRequests";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    getRequest(
      "https://boolean-api-server.fly.dev/LinusWillmont/contact/1"
    ).then((contact) => {
      console.log(contact);
      setLoggedInUser(contact);
    });
  }, []);

  return !loggedInUser ? (
    <p>Logging in</p>
  ) : (
    <body>
      <div className="container">
        <UserContext.Provider value={loggedInUser}>
          <HeaderBar />
          <div className="container-nav-main">
            <LeftMenu />
            <Routes>
              <Route path="/" element={<Navigate to={"/posts"} />} />
              <Route path="/posts" element={<PostsListPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </body>
  );
}

export default App;
