import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContactsPosts } from "../context/ContactPostContext"
import Header from "../universal/Header"
import LeftMenu from "../universal/LeftMenu"
import PostItem from "../dashboard/post/PostItem"

export default function PostDetails() {
  const { postId } = useParams()
  const { posts, contacts } = useContactsPosts()
  const [post, setPost] = useState(null)
  const [contact, setContact] = useState(null)

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === parseInt(postId))
    setPost(foundPost)
  }, [posts, postId])

  useEffect(() => {
    if (post) {
      const foundContact = contacts.find((c) => c.id === post.contactId)
      setContact(foundContact)
    }
  }, [post, contacts])

  return (
    <div className="dashboard-container">
      <Header />

      <div className="under-container">
        <LeftMenu />

        <div className="post-details-container">
          <div className="post-details">
            {post && contact ? (
              <PostItem contact={contact} post={post} showAllFromStart={true} />
            ) : (
              <p>Loading post details...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
