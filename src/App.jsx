import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <aside>
        <div className="sidebar">
          <a href="#" data-target="dashboard">
            <span className="material-symbols-outlined">home</span>
            <h3>Home</h3>
          </a>
          <a href="#" data-target="users">
            <span className="material-symbols-outlined">account_circle</span>
            <h3>Profile</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </>
  );
}

export default App;
