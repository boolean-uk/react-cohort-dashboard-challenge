import { useEffect, useState } from "react";
import { MainPageIcon, HomePageIcon, ProfileIcon } from "../components/images";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../components/Post";
import { getAPostByID } from "../Api";

function LookAtSpecificPostPage() {
  const [currentPost, setCurrentPost] = useState({});

  const { postId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getAPostByID(postId, setCurrentPost);
  }, [postId]);

  function goToMainPage() {
    navigate("/");
  }

  return (
    <div className="container">
      <header className="header header-colour">
        <MainPageIcon />
      </header>
      <div className="container-nav-main">
        <nav className="sidebar sidebar-colour">
          <button className="sidebar-button" onClick={goToMainPage}>
            <HomePageIcon />
            <p className="sidebar-button-image-and-font">Home</p>
          </button>
          <button className="sidebar-button">
            <ProfileIcon />
            <p>Profile</p>
          </button>
        </nav>
        <main className="main background">
          <Post postData={currentPost} simulatedUserID={1} />
        </main>
      </div>
    </div>
  );
}
export default LookAtSpecificPostPage;
