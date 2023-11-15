import SinglePostContent from "./components/SinglePostContent"
import SinglePostCommentContent from "./components/SinglePostCommentContent"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import '../../styles/post-and-comments.css'

    function PostAndComments({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {

    const [showPost, setShowPost] = useState(null)
    const [author, setAuthor] = useState(null)

    const { postId } = useParams()

    useEffect(() => {
        if (posts && postId) {
            setShowPost(posts.find((post) => Number(post.id) === Number(postId)))
        }
    }, [posts, postId])

    useEffect(() => {
        if (showPost)
            fetch(`${URL}/contact/${showPost.contactId}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, showPost])

    if (!author) return <p>Loading post...</p>

    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    if (!showPost) return <p>No post to display</p>

    return (
        <section className="post-and-comments-main">
            <div className="post-and-comments-container">
                <SinglePostContent post={showPost} URL={URL} initials={initials} author={author} setShouldGetPosts={setShouldGetPosts} />
                <SinglePostCommentContent post={showPost} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} />
                </div>
        </section>
    )
}

export default PostAndComments