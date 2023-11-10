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
            <img
              src="src/assets/title-header.svg "
              width="400px"
              alt="header"
            />
          </div>
          <div className="userInitials"></div>
        </header>
        {/* SideBar */}
        <nav className="sideBar">
          <div className="homeIconCon">
            <div className="homeIcon">
              <img src="src/assets/home.svg" alt="home" />
            </div>
            <div className="homeText">
              <p>Home</p>
            </div>
          </div>
          <div className="profileIconCon">
            <div className="profileIcon">
              <img src="src/assets/profile.svg" alt="profile" />
            </div>
            <div className="profileText">
              <p>Profile</p>
            </div>
          </div>
        </nav>
        {/* Main */}
        <main className="main">
          <div className="postContainer">
            <div className="userInitialsPost"></div>
            <div className="whatsOnMind">
              <p>What's on your mind?</p>
            </div>
            <div className="postButton">
              <button className="postBtn">
                <p>Post</p>
              </button>
            </div>
          </div>
          <div className="commentContainer">
            <div className="commentSection">
              <div className="userInfoCon">user intials, name and title</div>
              <div className="comment">comment</div>
            </div>
            <div className="addAComment"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
