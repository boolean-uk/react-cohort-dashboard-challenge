import { CohortContext } from "@/App"
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react"

import "./styles.css"
import PostHeader from "./components/PostHeader"
import PostAddCommentForm from "./components/PostAddCommentForm"
import CommentList from "./components/CommentList"
import { useParams } from "react-router-dom";

export default function Post() {
    const { users, posts } = useContext(CohortContext)

    const [ user, setUser ] = useState(null)
    const [ post, setPost ] = useState(null)

    const [comments, setComments] = useState([])

    const { id } = useParams()

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
            <CommentList comments={comments}/>
            <PostAddCommentForm 
            setComments={setComments} 
            comments={comments} 
            postId={post.id}
            />
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