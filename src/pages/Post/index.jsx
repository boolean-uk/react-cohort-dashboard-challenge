import { CohortContext } from "@/App"
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react"

import "./styles.css"
import PostHeader from "./components/PostHeader"
import PostAddCommentForm from "./components/PostAddCommentForm"
import CommentList from "./components/CommentList"
import { useNavigate, useParams } from "react-router-dom";

export default function Post() {
    const { users, posts, setPosts } = useContext(CohortContext)

    const [ user, setUser ] = useState(null)
    const [ post, setPost ] = useState(null)

    const navigate = useNavigate()

    const [comments, setComments] = useState([])

    const { id } = useParams()

    const deletePost = (postId) => {
        fetch(`https://boolean-api-server.fly.dev/Agatland/post/${postId}`,{
            method: "DELETE",
        })
        .then(res => {
            if (res.ok) {
                setPosts(posts.filter(postToDel => postToDel.id !== postId))
            }
        })
        navigate("/")
    }

    const deleteComment = (commentId) => {
        fetch(`https://boolean-api-server.fly.dev/Agatland/post/${post.id}/comment/${commentId}`,{
            method: "DELETE",
        })
        .then(res => {
            if (res.ok) {
                setComments(comments.filter(commentToDel => commentToDel.id !== commentId))
            }
        })
      }

    // Finding Post based on id, and user based on posts contactId, and fetch comments for post
    useEffect(() => {
        if (users && posts && id) {
          let postToUse = posts.find((post) => Number(post.id) === Number(id));
      
          if (postToUse) {
            setPost(postToUse);
            setUser(users.find((user) => user.id === postToUse.contactId));
      
            fetch(`https://boolean-api-server.fly.dev/Agatland/post/${postToUse.id}/comment`)
              .then((res) => res.json())
              .then((data) => setComments(data));
          }
        }
      }, [users, posts, id]);

    if (!user || !post) return <div className="post-list-item"></div>

    return (
        <div className="post-list-item main">
            <PostHeader post={post} user={user} />
            <p>{post.content}</p>
            <CommentList comments={comments} deleteComment={deleteComment} />
            <PostAddCommentForm 
            setComments={setComments} 
            comments={comments} 
            postId={post.id}
            />
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
        </div>
    )
}

Post.propTypes = {
    postInserted: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      contactId: PropTypes.number,
    }),
  };