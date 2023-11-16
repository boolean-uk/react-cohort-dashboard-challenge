import CreateComment from "./createComment";
import Pfp from "../../shared-components/Pfp/profilePicture";

export default function Comment(userInfo, commentInfo) {
    return (
        <>
            <div className="comment">
                <Pfp/>
                <div className="comment-body">
                    <div className="user-name">

                    </div>
                    <div className="comment-content">
                        <p>{commentInfo.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}