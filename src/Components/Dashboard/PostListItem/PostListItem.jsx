import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import Comment from "../Comment/Comment"
import { UserContext } from "../../../App"
import { ContactContext } from "../Dashboard"
import PostContentPost from "./PostContentPost/PostContentPost"
import PostComment from "../PostComment/PostComment"

function PostListItem({ post }) {
  const { user } = useContext(UserContext)
  const { contacts } = useContext(ContactContext)
  const [contact, ] = useState(contacts.find(c => c.id == post.contactId))

  const [comments, setComments] = useState(undefined)

  async function getComments() {
    await fetch(`https://boolean-api-server.fly.dev/kristianverduin/post/${post.id}/comment`)
        .then(res => res.json())
        .then((comments) => setComments([...comments]))
  }

  useEffect(() => {
    getComments()
  }, [])
  
  return (
    <div className="post">
        <div className="post-content">
            <PostContentPost contact={contact} post={post} />
            {comments &&
              <div className="comments">
                {comments.map((comment, i) => (
                    <Comment key={i} comment={comment} />
                ))}
              </div>
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
