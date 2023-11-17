import Pfp from "../../shared-components/Pfp/profilePicture";

export default function Comment({userInfo, commentInfo}) {

    return (
        <>
            <div className="comment">
                <Pfp/>
                <div className="comment-body">
                    <h3>{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
                    <p>{commentInfo.content}</p>
                </div>
            </div>
        </>
    )
}