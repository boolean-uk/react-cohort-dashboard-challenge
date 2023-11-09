import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* Container */}
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="titleHeading">
            <img src="src/assets/title-header.svg " width="400px" alt="" />
          </div>
          <div className="userInitials"></div>
        </header>
        {/* SideBar */}
        <nav className="sideBar">
          <div className="homeIconCon"></div>
          <div className="profileIconCon"></div>
        </nav>
        {/* Main */}
        <main className="main">main</main>
      </div>
    </>
  );
}

export default App;
