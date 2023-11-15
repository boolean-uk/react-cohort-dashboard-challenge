import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../src/header.jsx";
import Home from "../src/home.jsx";
import LeftMenu from "../src/left-menu.jsx";
import Form from "./form.jsx";
import "./App.css";

const App = () => {
  const [showNames, setShowNames] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const fetchData = () => {
    const URL1 = "https://boolean-api-server.fly.dev/Elizabethcodes44/contact";
    const URL2 = "https://boolean-api-server.fly.dev/Elizabethcodes44/post";
    //const URL3 = https://boolean-api-server.fly.dev/Elizabethcodes44/${post.id}/comment
    const getUrl1 = axios.get(URL1);
    const getUrl2 = axios.get(URL2);
    axios.all([getUrl1, getUrl2]).then(
      axios.spread((...allData) => {
        const allDataNames = allData[0].data;
        const allDataContent = allData[1].data;
        setShowNames(allData[0].data);
        setShowComments(allData[1].data);

        console.log(allDataNames);
        console.log(allDataContent);
        console.log("AllData [0]", allData[0].data);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("these are the names:", showNames);
  console.log("these are the comments:", showComments);

  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Home
          className="main-Container"
          showNames={showNames}
          showComments={showComments}
        ></Home>
        <LeftMenu className="LeftMenu"></LeftMenu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </>
  );
};
export default App;