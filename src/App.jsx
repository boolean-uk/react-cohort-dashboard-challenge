import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import { createContext, useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { PostsSection } from "./PostsSection";
import { addComment, addPost, fetchContactById, fetchPosts } from "./API/api";
import PostDetails from "./Post/PostDetails";

export const AppContext = createContext();

function App() {
 const [profile, setProfile] = useState(null);
 const [posts, setPosts] = useState([]);

 useEffect(() => {
   const profileId = 1; // The ID you need to fetch the profile for
   const fetchInitialData = async () => {
     try {
       const fetchedProfile = await fetchContactById(profileId);
       setProfile(fetchedProfile);
       const fetchedPosts = await fetchPosts();
       setPosts(fetchedPosts);
     } catch (error) {
       console.error("Failed to fetch initial data:", error);
     }
   };

   fetchInitialData();
 }, []);

 const updateProfile = (updatedProfile) => {
   setProfile(updatedProfile);
   localStorage.setItem("profileData", JSON.stringify(updatedProfile));
 };
  // Functions to manipulate posts and comments
  const addNewPost = async (newPost) => {
    try {
      const addedPost = await addPost(newPost); // Assuming addPost is an API call that adds a post
      setPosts((prevPosts) => [addedPost, ...prevPosts]);
    } catch (error) {
      console.error("Failed to add new post:", error);
    }
  };
  const addNewComment = async (postId, newComment) => {
    try {
      const addedComment = await addComment(postId, newComment); // Assuming addComment is an API call that adds a comment
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, addedComment] }
            : post
        )
      );
    } catch (error) {
      console.error(`Failed to add comment to post ID ${postId}:`, error);
    }
  };
  if (!profile) return <div>Loading profile...</div>;

  return (
    <>
      <AppContext.Provider
        value={{ profile, updateProfile, posts, addNewPost, addNewComment }}
      >
        <Header />
        <div className="container">
          {" "}
          {/* Use a container to layout sidebar and main content */}
          <Sidebar />
          <div className="main-content">
            {" "}
            {/* This is where your routed components will render */}
            <Routes>
              <Route path="/" element={<PostsSection />} />
              <Route path="/post/:postId" element={<PostDetails />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
