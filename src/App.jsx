import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LeftMenu from "./components/leftMenu/leftMenu";
import Header from "./components/header/header";
import PostBody from "./components/posts/index";
import SinglePost from "./components/posts/Post/SinglePost";
import ProfilePage from "./components/profile";
const PostContext = createContext();
const UserContext = createContext();

function App() {
  const [posts, setPosts] = useState([{}]);
  const [users, setUsers] = useState([{ firstName: "", lastName: "" }]);
  //This is just dummy data
  const currentUser = {firstName: "Leo", lastName: "Wahlandt", favouriteColour: "#2b8ced", contactId: 16}

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/valen98/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });

    fetch("https://boolean-uk-api-server.fly.dev/valen98/contact")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <main>
      <UserContext.Provider value={{ users, setUsers, currentUser }}>
        <PostContext.Provider value={{ posts, setPosts }}>
          <Header />
          <div className="mainBody">
            <LeftMenu id={currentUser.contactId}/>
            <Routes>
              <Route path="/" element={<PostBody />} />
              <Route path="/view/:id"  element={<SinglePost posts={posts} />}/>
              <Route path="/profile/:id" element={<ProfilePage />} />
            </Routes>
          </div>
        </PostContext.Provider>
      </UserContext.Provider>
    </main>
  );
}

export { App, PostContext, UserContext };
