import { CohortContext } from "@/App"
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react"

import "./styles.css"
import PostHeader from "@/pages/Post/components/PostHeader"
import PostAddCommentForm from "@/pages/Post/components/PostAddCommentForm"
import CommentList from "@/pages/Post/components/CommentList"

// uses Post page components
export default function PostListItem({post}) {
    const { users } = useContext(CohortContext)

    const [ user, setUser ] = useState(null)
    const [comments, setComments] = useState([])


    useEffect(() => {
        setUser(users.find(user => user.id === post.contactId))

        fetch(`https://boolean-api-server.fly.dev/Agatland/post/${post.id}/comment`)
        .then(res => res.json())
        .then(data => setComments(data))

    }, [users])

    if (!user) return <div className="post-list-item"></div>

    return (
        <div className="post-list-item">
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

PostListItem.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      contactId: PropTypes.number,
    }),
  };