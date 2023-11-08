import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={Icons8} width={40} alt="logo"></img>
        <h1>Cohort Manager</h1>
      </header>
      </div>
  );
}

export default App;
