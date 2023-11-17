import Pfp from "../../shared-components/Pfp/profilePicture";

export default function Comment(userInfo, commentInfo) {
    console.log(commentInfo)

    return (
        <>
            <div className="comment">
                <Pfp/>
                <div className="comment-body">
                    <p>{userInfo.name}</p>
                    <p>{commentInfo.content}</p>
                </div>
            </div>
        </>
    )
}