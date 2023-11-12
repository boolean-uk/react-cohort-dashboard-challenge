import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../src/header.jsx";
import Main from "../src/home.jsx";
import LeftMenu from "../src/left-menu.jsx";
import Form from "./form.jsx";
import "./App.css";

function App() {
  const [showComments, setShowComments] = useState([]);
  const URL = "https://boolean-api-server.fly.dev/Elizabethcodes44/post";

  const getComments = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((data) => setShowComments(data));
  };
  //console.log(showComments)

  useEffect(()=>getComments(), []);
  
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Main className="main-Container" showComments={showComments}setShowComments={setShowComments}></Main>
        <LeftMenu className="LeftMenu">
        <Routes>
          <Route
            path="/form"
            element={<Form getContact={getComments} URL={URL} />}  />
        </Routes>
        </LeftMenu>
      </div>
    </>
  );
}

export default App;
