import { useContext } from "react"
import PostComments from "./PostComments"
import PostContent from "./PostContent"
import PostHead from "./PostHead"
import { AppDataContext } from "../../App"

function Post(props) {
  const context = useContext(AppDataContext)
  const { post } = props

  const getUserById = (id) => {
    let user = context.users.find((user) => user.id === id)
    if (user === undefined) {
      user = {
        firstName: 'loading...', // Not a good way to solve this problem 
        lastName: 'loading...'
      }
    }
    return user
  }

  const user = getUserById(post.contactId)
  
  return (
    <article className="post weak-shadow" >
      <PostHead postTitle={post.title} postedBy={user}/>
      <PostContent postContent={post.content}/>
      <PostComments postId={post.id}/>
    </article>
  )
}

export default Post