import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NewPostForm from './components/NewPostForm'
import PostList from './components/PostList'
import SinglePost from './components/SinglePost'
import CommentForm from './components/CommentForm'
import HomeIcon from './components/HomeIcon'
import ProfileIcon from './components/ProfileIcon'
import TitleComponent from './components/TitleComponent'
import { usePosts } from './contexts/PostContext'
import { useParams } from 'react-router-dom'
import AuthorInitials from './components/AuthorInitials'
import UserProfile from './components/UserProfile'

function App() {
    const { posts, addCommentToPost, setPosts } = usePosts()
    const { loggedInUser } = usePosts()

    function handleNewPost(newPost) {
        setPosts(prevPosts => [newPost, ...prevPosts])
        console.log("Updated Posts:", [newPost, ...posts])
    }

    function CommentFormWrapper() {
        let { postId } = useParams()
        const handleCommentSubmit = (comment) => {
            addCommentToPost(postId, comment)
        }
        return <CommentForm postId={postId} onCommentSubmit={handleCommentSubmit} />
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <TitleComponent />
                    <div className="header-author-initials">
                        {loggedInUser && (
                            <Link to="/profile/1" className="author-link">
                                <AuthorInitials name={loggedInUser.name} id={loggedInUser.id} />
                            </Link>
                        )}
                    </div>
                </header>
                <div className="main-content">
                    <div className="navigation-icons">
                        <div className="home-icon-container">
                            <Link to="/">
                                <HomeIcon />
                            </Link>
                        </div>
                        <div className="profile-icon-container">
                            <Link to="/profile/1">
                                <ProfileIcon />
                            </Link>
                        </div>
                    </div>
                    <div className="content-area">
                        <NewPostForm addNewPost={handleNewPost} />
                        <Routes>
                            <Route path="/" element={<PostList />} />
                            <Route path="/post/:postId" element={<SinglePost />} />
                            <Route path="/post/:postId/comment" element={<CommentFormWrapper />} />
                            <Route path="/profile/:userId" element={<UserProfile />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App