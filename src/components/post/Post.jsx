import "../../style/post/Post.css";
import UserIcon from "../icons/UserIcon";

const Post = ({ post }) => {
    return (
        <li className="list-item">
            <div className="post-owner">
                <UserIcon firstName={"Gudbrand"} lastName={"Dynna"} />
                <div className="owner-info">
                    <h2>Gudbrand Dynna</h2>
                    <p>I really don't like css!</p>
                </div>
            </div>
            <p>{post}</p>
            <hr />
        </li>
    );
};

export default Post;
