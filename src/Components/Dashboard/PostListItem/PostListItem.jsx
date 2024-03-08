import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../App"
import { ContactContext } from "../Dashboard"
import PostContentPost from "./PostContentPost/PostContentPost"
import PostComment from "../PostComment/PostComment"
import Comments from "../Comments/Comments"
import "./PostListItem.css"

function PostListItem({ post }) {
  const { user } = useContext(UserContext)
  const { contacts } = useContext(ContactContext)
  const [contact, ] = useState(contacts.find(c => c.id == post.contactId))
  const [comments, setComments] = useState(undefined)
  const [numberOfComments, setNumberOfComments] = useState(3)

  async function getComments() {
    await fetch(`https://boolean-api-server.fly.dev/kristianverduin/post/${post.id}/comment`)
        .then(res => res.json())
        .then((comments) => setComments([...comments]))
  }

  function updateComments() {
    setNumberOfComments(comments.length)
  }

  useEffect(() => {
    getComments()
  }, [])
  
  return (
    <div className="post">
        <div className="post-content">
            <PostContentPost contact={contact} post={post} />
            {comments &&
              <Comments comments={comments} numberOfComments={numberOfComments} updateComments={updateComments} />
            }
            <PostComment post={post} user={user} getComments={getComments} />
        </div>
    </div>
  )
}

PostListItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostListItem
