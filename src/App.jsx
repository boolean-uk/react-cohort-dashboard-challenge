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
          <div className="logo">logo</div>
          <div className="titleHeading"></div>
          <div className="userInitals"></div>
        </header>
        {/* SideBar */}
        <nav className="sideBar">side</nav>
        {/* Main */}
        <main className="main">main</main>
      </div>
    </>
  );
}

export default App;
