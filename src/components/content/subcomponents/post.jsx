import { Link, useParams } from 'react-router-dom'

import Pfp from "../../shared-components/Pfp/profilePicture";
import CreateComment from "./createComment";

function Post({username, UID, title, postContent, PID}) {

    const post = {username: username, UID: UID, title: title, postContent: postContent, PID: PID}

    return (
        <>
        <div className="post">
            <div className="user">
                <Pfp/>
                <div className="user-info">
                    <h3>{username}</h3>
                    <Link to={`/post/${PID}`}>
                        <p>{title}</p>
                    </Link>
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