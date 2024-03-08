import ProfilePicture from "../reusable/ProfilePicture"
import { AppDataContext } from "../../App"
import { useContext } from "react"

function Comment(props) {
  const context = useContext(AppDataContext)

  
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
  const user = getUserById(props.comment.contactId)

  return (
    <div className="comment">
      <div className="comment-body">
        <h4>{`${user.firstName} ${user.lastName}`}</h4>
        <p>{props.comment.content}</p>
      </div>
    </div>
  )
}

export default Comment