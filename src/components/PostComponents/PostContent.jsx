import { Link } from "react-router-dom";
import UserIcon from "../UserIcon";

export default function PostContent ({post, users}) {
    // console.log(post.contactId)
    // console.log(users)

    // console.log(users.length)
    let userInfo = {firstName: "Bob", lastName: "Marley"}

    if (users.length !== 0) {
        userInfo = users.find(user => user.id === post.contactId)
    }

    // console.log(userInfo)

    return (
        <div className="postContentContainer">
            <UserIcon userInfo={userInfo} className="icon"/>
            <div className="postTitleContainer">
                <h3>{userInfo.firstName + " " + userInfo.lastName}</h3>
                <h4><Link to={`/post/${post.id}`}>{post.title}</Link></h4>
            </div>
            <p className="postText">{post.content}</p>
        </div>
    )
}