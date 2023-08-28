import "./App.css";
import FeedSection from "./Components/Feed/FeedSection";
import LeftNavSection from "./Components/LeftNavSection";
import Header from "./Components/Header";
import DataContext from "./DataContext";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileView from "./Components/Profile/ProfileView";
import PostView from "./Components/Post/PostView";
import { findById, getRandomUserId, shuffleArray } from "./Utils";
import EditProfileForm from "./Components/Profile/EditProfileForm";
import PostForm from "./Forms/PostForm";

function App() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState({});
    const [editingIndex, setEditingIndex] = useState(null);
    const [requiredFieldError, setRequiredFieldError] = useState(false);
    const API_BASE_URL = "https://jsonplaceholder.typicode.com";

  
    const updateCommentsForPost = (postId, updatedComments) => {
        setComments((prevComments) => ({
            ...prevComments,
            [postId]: updatedComments,
        }));
        console.log(comments[postId]);
    };

    const updateComment = (postId, updatedComment) => {
        const updatedComments = comments[postId].map((comment) =>
            comment.id === updatedComment.id ? updatedComment : comment
        );
        updateCommentsForPost(postId, updatedComments);
    };
    const deleteComment = (postId, commentId) => {
        fetch(`${API_BASE_URL}/comments/${commentId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    setComments((prevComments) => ({
                        ...prevComments,
                        [postId]: prevComments[postId].filter(
                            (comment) => comment.id !== commentId
                        ),
                    }));
                }
            })
            .catch((error) => {
                console.error("Error deleting comment:", error);
            });
    };

    async function fetchData() {
        try {
            const postsResponse = await fetch(
                `${API_BASE_URL}/posts`
            );
            const postsJsonResponse = await postsResponse.json();
            const shuffledPosts = shuffleArray(postsJsonResponse);

            const usersResponse = await fetch(
                `${API_BASE_URL}/users`
            );
            const usersData = await usersResponse.json();
            setUsers(usersData);

            const commentFetchPromises = postsJsonResponse.map(async (post) => {
                const commentResponse = await fetch(
                    `${API_BASE_URL}/posts/${post.id}/comments`
                );
                const commentsJsonResponse = await commentResponse.json();
                const commentsWithUserId = commentsJsonResponse.map(
                    (comment) => ({
                        ...comment,
                        userId: getRandomUserId(),
                    })
                );
                return {
                    postId: post.id,
                    comments: commentsWithUserId,
                };
            });

            const commentData = await Promise.all(commentFetchPromises);
            const commentsData = {};
            commentData.forEach(({ postId, comments }) => {
                commentsData[postId] = comments;
            });

            setComments(commentsData);
            setPosts(shuffledPosts);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const loggedUser = findById(users, 1);
    if (!loggedUser) {
        return null;
    }
    return (
        <div className="app">
            <DataContext.Provider
                value={{
                    posts,
                    setPosts,
                    loggedUser,
                    comments,
                    setComments,
                    users,
                    setUsers,
                    editingIndex,
                    setEditingIndex,
                    updateCommentsForPost,
                    updateComment,
                    deleteComment,
                    requiredFieldError,
                    setRequiredFieldError,
                    API_BASE_URL
                }}
            >
                <Header />
                <LeftNavSection />

                <Routes>
                    <Route path="/" element={<FeedSection />} />
                    <Route path="/view/profile/:id" element={<ProfileView />} />
                    <Route
                        path="/edit/profile/:id"
                        element={<EditProfileForm />}
                    />
                    <Route path="/view/post/:id" element={<PostView />} />
                    <Route path="/edit/post/:id" element={<PostForm />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
}

export default App;
