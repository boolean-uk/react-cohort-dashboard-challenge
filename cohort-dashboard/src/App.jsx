import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id/profile"></Route>
      </Routes>
    </>
  );
}

export default App;
