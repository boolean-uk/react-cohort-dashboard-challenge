import UserIcon from "../UserIcon";

export default function Comment ({comment, users}) {
    // console.log(comment)
    let userInfo = {firstName: "Bob", lastName: "Marley"}

    if (users.length !== 0) {
        userInfo = users.find(user => user.id === comment.contactId)
    }

    return (
        <div className="commentContainer">
            <UserIcon userInfo={userInfo}/>
            <div className="commentContent">
                <p className="bold">{userInfo.firstName + " " + userInfo.lastName}</p>
                <p>{comment.content}</p>
            </div>
            <div></div>
        </div>
    )
}