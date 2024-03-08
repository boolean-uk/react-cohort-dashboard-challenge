import CreateComment from "./CreateComment"
import CommentList from "./CommentList"
import PostContent from "./PostContent"
import { useEffect, useState, useContext} from "react"
import PostHeader from "./PostHeader"
import PropTypes from "prop-types"
import { UserContext } from "../../../App"


function PostItem({post, setPosts}) {
  const {loggedInUser} = useContext(UserContext) 
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

  const deletePost = async(event) => {
    event.preventDefault()
    try {
      const res = await fetch(`https://boolean-api-server.fly.dev/AxelHan/post/${post.id}`, {
          method: "DELETE",
          headers: { 'Content-Type': 'application/json'},
      })
      console.log(res.json)
      if(res.ok) {
          console.log("success post deleted")
          setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
          
      } else{
          console.error("Failed to delete contact")
      }
  }
  catch (error){
      console.error('Error:', error)
  }

    
  };

  const updatePost = () => {
    
  }

  return (
    <div className="post-container">
        <PostHeader user={user} post={post}></PostHeader>
        {((user.id === loggedInUser.id) && 
          (
            <div className="modify-buttons">
              <button onClick={deletePost} className="delete">Delete</button>
              <button onClick={updatePost}  className="update">Update</button>
            </div>
          )
        )}
        <PostContent post={post}></PostContent>
        <CommentList comments={comments}></CommentList>
        <CreateComment setComments={setComments} comments={comments} postId={post.id}> </CreateComment>
        
    </div>
  )
}

PostItem.propTypes = {

  post: PropTypes.object
  
}


export default PostItem