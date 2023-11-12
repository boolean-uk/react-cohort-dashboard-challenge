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
          <div className="userInitials">Initials</div>
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
              <form>
                <input
                  className="whatsOn"
                  placeholder="What's on your mind?"
                  type="text"
                />
              </form>
            </div>
            <div className="postButton">
              <button className="postBtn">
                <p>Post</p>
              </button>
            </div>
          </div>
          <div className="commentContainer">
            <div className="commentSection">
              <div className="userInfoCon">
                <div className="intialsInCommentCon">Another person</div>
                <div className="nameTitleCon">
                  <div className="name">
                    <p>
                      <strong>Sam Fletcher</strong>
                    </p>
                  </div>
                  <div className="title">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum ab molestiae, excepturi repellendus possimus, aspernatur
                  officiis eos porro aperiam suscipit aut fugiat? Voluptas
                  recusandae quia sint, qui reiciendis placeat magnam!
                </p>
              </div>
            </div>
            <div className="addAComment">
              <div className="userInitialsComment"></div>
              <div className="commentInput">
                <form>
                  <input
                    className="inputAComment"
                    placeholder="Add a comment"
                    type="text"
                  />
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
