import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Icons8 from "./assets/Icons8-logo.svg";
import homeImg from "./assets/home.svg";
import profileImg from "./assets/profile.svg";
import Header from "./components/Header";
import Home from "./components/Home";
import LeftMenu from "./components/LeftMenu";
import Submit from "./assets/Submit.svg";
import "./styles/App.css";
import EachPost from "./components/EachPost";

function App() {
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");
  const { postId } = useParams();
  const reversedPostData = [...posts].reverse();

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    contacts.forEach((contact) => {
      if (!postComments[contact.id]) {
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

  const mainUserInitials = "CH";

  const mainPostSubmit = (event) => {
    event.preventDefault();

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "",
        contactId: 16,
        content: newPost,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, data]);
        setNewPost("");
      })
      .catch((error) => console.error("Error submitting main post:", error));
  };
  const handleSubmit = (event, postId) => {
    event.preventDefault();
    console.log("submitting comment", newComment);

    fetch(
      `https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}/comment`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: "",
          postId: 1,
          contactId: 16,
          content: newComment,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the specific postComments array with the new comment
        setPostComments((prevComments) => ({
          ...prevComments,
          [postId]: [...(prevComments[postId] || []), data],
        }));
        setNewComment("");
      })
      .catch((error) => console.error("Error commenting on post:", error));
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
                <label>
                  {" "}
                  <div className="user-post-logo">{mainUserInitials}</div>
                  <input
                    className="main-input"
                    type="text"
                    id=""
                    name=""
                    value={newPost}
                    placeholder="What's on your mind?"
                    onChange={(e) => setNewPost(e.target.value)}
                  ></input>
                </label>
                <button type="submit" className="main-postbutton">
                  Post
                </button>
              </form>
            </div>

            <ul className="full-comment-ul">
              {reversedPostData.map((post) => {
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

                    <Link to={`/comments/${post.id}`}>
                      <div className="comment-link">{post.title}</div>
                    </Link>

                    <div className="main-comment">{post.content}</div>
                    <hr className="hr"></hr>
                    <div className="other-comments">
                      {postComments[post.id]?.map((comment) => {
                        const commenter = contacts.find(
                          (c) => c.id === comment.contactId
                        );
                        const initials = commenter
                          ? `${commenter.firstName[0]} ${commenter.lastName[0]}`
                          : "";
                        return (
                          <div
                            key={`${post.id} ${comment.id}`}
                            className="other-comment"
                          >
                            <div className="post-initials">{initials}</div>
                            <div className="other-comments-post">
                              <div className="comment-post-name">
                                {commenter
                                  ? `${commenter.firstName} ${commenter.lastName}`
                                  : ""}
                              </div>
                              <div className="comment-content-post">
                                {comment.content}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="form">
                      <form
                        onSubmit={(e) => handleSubmit(e, post.id)}
                        className="comment-form"
                      >
                        <label>
                          <div className="user-comment-logo">
                            {mainUserInitials}
                          </div>
                          <input
                            className="input"
                            type="text"
                            id=""
                            name=""
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => {
                              console.log(
                                "Comment input value:",
                                e.target.value
                              );
                              setNewComment(e.target.value);
                            }}
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
        <Route path="/Header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/LeftMenu" element={<LeftMenu />} />
        <Route path="/comments/:id" element={<EachPost />} />
      </Routes>
    </div>
  );
}

export default App;
