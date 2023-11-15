import Pfp from "../../shared-components/Pfp/profilePicture";
import CreateComment from "./createComment";

function Post({name, UID, desc, postContent}) {
    return (
        <>
        <div className="post">
            <div className="user">
                <Pfp/>
                <div className="user-info">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="post-content">
                <p>{postContent}</p>
            </div>
            <CreateComment/>
        </div>
        </>
    )
}

export default Post;