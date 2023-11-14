import Pfp from "../../shared-components/profilePicture";
import CreateComment from "./createComment";

function Post() {
    return (
        <>
        <div className="post">
            <Pfp/>
            <div className="user-info">

            </div>
            <p className="comment-content">content</p>
            <CreateComment/>
        </div>
        </>
    )
}

export default Post;