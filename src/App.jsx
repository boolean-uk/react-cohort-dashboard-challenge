import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import homeImg from "./assets/home.svg";
import profileImg from "./assets/profile.svg";
import Profile from "./components/Profile";
import Home from "./components/Home";
import CommentingOnPost from "./components/CommentingOnPost";
import Submit from "./assets/Submit.svg";
import "./styles/App.css";

function App() {

const {contactId} = useParams()

  const [contacts, setContacts] = useState([]);
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState([])

  function fetchContact() {
    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }
  useEffect(fetchContact, []);

  function fetchComment() {
    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }
  useEffect(fetchComment, []);


  function fetchPostComment () {
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/post/${contactId}/comment`)
    .then((response) => response.json())
    .then((data) => setPostComment(data))
  }
  useEffect(fetchPostComment, [contactId])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={Icons8} width={40} alt="logo" />
        <h1 className="h1">Cohort Manager</h1>
        <p className="initials">CH</p>
      </header>

      <main className="main-grid">
        <div className="left-menu">
          <div className="whole-logo">
            <img className="home-logo" src={homeImg} width={40} alt="home logo" />
            <Link to="/Home" className="home">
              Home
            </Link>
          </div>

          <div className="whole-profile">
            <img className="profile-logo" src={profileImg} width={40} alt="profile logo" />
            <Link to="/Profile" className="profile">
              Profile
            </Link>
          </div>
        </div>

        <div className="main-content">
          <div className="each-post">
          <ul className="full-comment-ul">
            {comments.map((comment) => {
              const contact = contacts.find((c) => c.id === comment.contactId);
          
              return (
                <li key={comment.id} className="full-comment-li">
                  <div className="comment-title">{contact ? `${contact.firstName} ${contact.lastName}` : ""}</div>
                  <Link to={"/comments"}><div className="comment-link">{comment.title}</div></Link>
                  <div className="main-comment">{comment.content}</div>
                  <hr className="hr"></hr>
                  <div className="other-comments">{comment.postId}</div>
                  <div className="form">
                    <form onSubmit={handleSubmit} className="comment-form">
                      <label>
                        <input className="input"
                          type="text"
                          id=""
                          name=""
                          placeholder="Add a comment..."
                        />
                      </label>
                      <button className="post-button" type="submit">
                        <img src={Submit} width={20} alt="submit button"></img>
                      </button>
                    </form>
                  </div>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </main>

      <Routes>
        <Route path="/comments" element={<CommentingOnPost />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
