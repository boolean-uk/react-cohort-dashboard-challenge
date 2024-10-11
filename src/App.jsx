import { useState, useEffect, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Feed from "./sections/Feed";
export const UserContext = createContext();
export const PostContext = createContext();
export const CommentContext = createContext();
export const LoginContext = createContext();

import "./App.css";
import { Post } from "./sections/Posts";
import { PostView } from "./sections/Posts/components/PostView";

function App() {
  const userLogin = {
    "firstName": "Trude",
    "lastName": "Drevland",
    "gender": "Female",
    "email": "trude.drevland@bergen.no",
    "jobTitle": "Former Mayor of Bergen",
    "street": "Bergen",
    "city": "Bergen",
    "latitude": 60.39299,
    "longitude": 5.32415,
    "favouriteColour": "#005f99",
    "profileImage":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCQL0tidxGV8tuE_Aj1wjZz05y17xjp-yOtKyYja2PfR7gG3V",
    "id": 1,
  };
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(userLogin);

  useEffect(() => {}, []);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/h602121/contact")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        setUsers(x);
      });
  }, []);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/h602121/post")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        const sortedPosts = x.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
      });
  }, []);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/h602121/post/{postId}/comment")
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        setComments(x);
      });
  }, []);
  return (
    <>
      <header>
        <nav>
          <LoginContext.Provider
            value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
          >
            <UserContext.Provider value={{ users: users, setUsers: setUsers }}>
              <PostContext.Provider
                value={{ posts: posts, setPosts: setPosts }}
              >
                <CommentContext.Provider
                  value={{ comments: comments, setComments: setComments }}
                >
                  <Routes>
                    <Route
                      path="/feed"
                      element={<Feed posts={posts} users={users}></Feed>}
                    ></Route>

                    <Route path="/profile"></Route>
                    <Route
                      path="/feed/post/:postId"
                      element={<PostView></PostView>}
                    ></Route>
                  </Routes>
                </CommentContext.Provider>
              </PostContext.Provider>
            </UserContext.Provider>
          </LoginContext.Provider>
        </nav>
      </header>
    </>
  );
}

export default App;
