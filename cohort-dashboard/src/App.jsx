import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState("");

  const fetchUser = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/contact/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(fetchUser, []);

  return (
    <>
      <Header user={user} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id/profile"></Route>
      </Routes>
    </>
  );
}

export default App;
