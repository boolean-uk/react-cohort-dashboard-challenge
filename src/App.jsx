/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import Header from "./Components/Header";
import NavAside from "./Components/NavAside";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import SinglePost from "./Subcomponents/SinglePost";
import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const loggedInUser = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    logUserIn();
  }, []);

  const logUserIn = async () => {
    const data = await fetch(
      "https://boolean-uk-api-server.fly.dev/MrStashy/contact/1"
    );
    const json = await data.json();
    setLoggedUser(json);
    console.log('triggered')
  };


  return (
    <>
      <div className="container h-full max-w-full grid grid-cols-[100px,_auto] grid-rows-[60px,_auto]">
        <loggedInUser.Provider value={loggedUser}>
          <Header />
          <NavAside />
          <main className="bg-bodyBackground">
            <Routes>
              <Route path={"/"} element={<Feed />} />
              <Route path={"/profile/:id"} element={<Profile logUserIn={logUserIn} />} />
              <Route path={"/posts/:id"} element={<SinglePost />} />
            </Routes>
          </main>
        </loggedInUser.Provider>
      </div>
    </>
  );
}

export default App;
