import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/"></Route>
        <Route path="/:id/profile"></Route>
      </Routes>
    </>
  );
}

export default App;
