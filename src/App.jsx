import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
import { createContext, useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { PostsSection } from "./PostsSection";
import { addComment, addPost, fetchComments, fetchContactById, fetchPosts } from "./API/api";
import PostDetails from "./Post/PostDetails";
import UserProfilePage from "./ProfilePage/UserProfilePage";

export const AppContext = createContext();

function App() {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem("profileData", JSON.stringify(updatedProfile));
  };
   useEffect(() => {
     const fetchInitialData = async () => {
       try {
         const fetchedProfile = await fetchContactById(1); // Assuming profileId is available and is 1
         const fetchedPosts = await fetchPosts();

         const postsWithComments = await Promise.all(
           fetchedPosts.map(async (post) => {
             const comments = await fetchComments(post.id);
             return { ...post, comments };
           })
         );

         setProfile(fetchedProfile);
         setPosts(postsWithComments);
       } catch (error) {
         console.error("Failed to fetch initial data:", error);
       } finally {
         setIsLoading(false); // Ensure loading state is updated regardless of fetch outcome
       }
     };

     fetchInitialData();
   }, []);

   if (isLoading) return <div>Loading...</div>;

  // Updated functions
  const addNewPost = async (newPostData) => {
    try {
      const createdPost = await addPost(newPostData);
      setPosts([createdPost, ...posts]);
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  const addNewComment = async (postId, newCommentData) => {
    try {
      const createdComment = await addComment(postId, newCommentData);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [...(post.comments || []), createdComment],
              }
            : post
        )
      );
    } catch (error) {
      console.error(`Error adding new comment to post ID ${postId}:`, error);
    }
  };

  // Value provided to AppContext.Provider should now also include a method to retrieve comments for a specific post
  const getCommentsForPost = (postId) => {
    const post = posts.find((post) => post.id === postId);
    return post ? post.comments || [] : [];
  };



  return (
    <>
      <AppContext.Provider
        value={{
          profile,
          updateProfile,
          posts,
          addNewPost,
          addNewComment,
          getCommentsForPost,
        }}
      >
        <Header />
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<PostsSection />} />
              <Route path="/post/:postId" element={<PostDetails />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/user/:userId" element={<UserProfilePage />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
