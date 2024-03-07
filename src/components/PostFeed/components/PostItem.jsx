import CreateComment from "./CreateComment"
import CommentList from "./CommentList"
import PostContent from "./PostContent"
import { useEffect, useState} from "react"
import PostHeader from "./PostHeader"


function PostItem({post}) {
  const [comments, setComments] = useState([])
  const [user, setUser] = useState({
    firstName: "default",
    lastName: "default"
  })

  const fetchComments = () => {
    fetch(`https://boolean-api-server.fly.dev/AxelHan/post/${post.id}/comment`)
    .then((res) => res.json())
    .then((data) => {
      setComments(data)
    })
  }

  const fetchUser = () => {
    fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${post.contactId}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
    })
  }


  useEffect(() => {
    fetchComments()
    fetchUser()
  }, [])


  return (
    <div className="post-container">
        <PostHeader user={user} post={post}></PostHeader>
        <PostContent post={post}></PostContent>
        <CommentList comments={comments}></CommentList>
        <CreateComment setComments={setComments} comments={comments} postId={post.id}> </CreateComment>
    </div>
  )
}

export default PostItem