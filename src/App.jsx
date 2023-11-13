import {  Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";

import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [posts,setPosts] = useState('')
  const root = 'https://boolean-api-server.fly.dev/aayushlama4008/post'

  const  fetchPost  = () =>{
      fetch(root)
      .then((response)=>response.json())
      .then((data)=> setPosts(data))
  }

  useEffect((fetchPost),[])
  console.log(posts)

  return (
   <Routes>
    <Route path="/" element={<Home/>}>
    </Route>
   </Routes>
  );
}

export default App;
