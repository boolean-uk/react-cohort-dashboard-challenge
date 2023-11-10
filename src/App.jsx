import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import homeImg from "./assets/home.svg";
import profileImg from "./assets/profile.svg";
import Profile from "./components/Profile";
import Home from "./components/Home";
import CommentingOnPost from "./components/CommentingOnPost";
import Submit from "./assets/Submit.svg";
import "./styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]); // Renamed 'post' to 'posts'
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post")
      .then((response) => response.json())
      .then((data) => setPosts(data)) // Renamed 'setComments' to 'setPosts'
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    contacts.forEach((contact) => {
      // Check if post comments already exist
      if (!postComments[contact.id]) {
        // Updated the guard clause
        fetch(
          `https://boolean-api-server.fly.dev/Callumhayden99/post/${contact.id}/comment`
        )
          .then((response) => response.json())
          .then((data) => {
            setPostComments((prevData) => ({
              ...prevData,
              [contact.id]: data,
            }));
          })
          .catch((error) =>
            console.error("Error fetching post comments:", error)
          );
      }
    });
  }, [contacts, postComments]);


  const mainUserInitials = "CH"


  const mainPostSubmit = (event) => {
    event.preventDefault()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

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
            <img
              className="home-logo"
              src={homeImg}
              width={40}
              alt="home logo"
            />
            <Link to="/Home" className="home">
              Home
            </Link>
          </div>

          <div className="whole-profile">
            <img
              className="profile-logo"
              src={profileImg}
              width={40}
              alt="profile logo"
            />
            <Link to="/Profile" className="profile">
              Profile
            </Link>
          </div>
        </div>

        <div className="main-content">
          <div className="each-post">
            <div className="main-postbox">
              <form onSubmit={mainPostSubmit}>
                <label>  <div className="user-post-logo">{mainUserInitials}</div>
                  <input
                    className="main-input"
                    type="text"
                    id=""
                    name=""
                    placeholder="What's on your mind?"
                  ></input>
                </label>
                <button type="submit" className="main-postbutton">
                  Post
                </button>
              </form>
            </div>

            <ul className="full-comment-ul">
              {posts.map((post) => {
                const contact = contacts.find((c) => c.id === post.contactId);
                let initials = "";
                if (contact) {
                  initials = `${contact.firstName[0]} ${contact.lastName[0]}`;
                }

                return (
                  <li key={post.id} className="full-comment-li">
                    <div className="comment-title">
                      <div className="post-initials">{initials}</div>
                      {contact
                        ? `${contact.firstName} ${contact.lastName}`
                        : ""}
                    </div>

                    <Link to={"/comments"}>
                      <div className="comment-link">{post.title}</div>
                    </Link>

                    <div className="main-comment">{post.content}</div>
                    <hr className="hr"></hr>
                    <div className="other-comments">
                      {postComments[post.id]?.map((relatedComment) => {
                        const commenter = contacts.find(
                          (c) => c.id === relatedComment.contactId
                        );
                        const initials = commenter
                          ? `${commenter.firstName[0]} ${commenter.lastName[0]}`
                          : "";
                        return (
                          <div
                            key={relatedComment.id}
                            className="other-comment"
                          >
                            <div className="post-initials">{initials}</div>
                            <div className="other-comments-post">
                              <div className="comment-post-name">
                                {commenter ? `${commenter.firstName} ${commenter.lastName}`: ""}
                              </div>
                              <div className="comment-content-post">
                                {relatedComment.content}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="form">
                      <form onSubmit={handleSubmit} className="comment-form">
                        <label>  <div className="user-comment-logo">{mainUserInitials}</div>
                          <input
                            className="input"
                            type="text"
                            id=""
                            name=""
                            placeholder="Add a comment..."
                          />
                        </label>
                        <button className="post-button" type="submit">
                          <img
                            src={Submit}
                            width={20}
                            alt="submit button"
                          ></img>
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
        <Route path="/comments" element={<CommentingOnPost />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
