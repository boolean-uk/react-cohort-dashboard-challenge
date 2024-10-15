import UserIcon from "./UserIcon"

function Comment(props){
    const { comment } = props
    const { findUser } = props
    const user = findUser(comment.contactId)
    return(
        <div className="comment">
            {user?<UserIcon user={user}/>: <></>}
            <h5>{`${user.firstName} ${user.lastName}`}</h5>
            <p className="comment-content">{comment.content}</p>
        </div>
    )
}

export default Comment