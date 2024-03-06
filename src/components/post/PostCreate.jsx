import "../../style/post/PostCreate.css";
import UserIcon from "../../components/icons/UserIcon";

const PostCreate = () => {
    return (
        <div className="post-create">
            <UserIcon firstName={"Gudbrand"} lastName={"Dynna"} />
            <input className="post-bar" placeholder="What's on your mind?" />
            <button className="post-btn">Post</button>
        </div>
    );
};

export default PostCreate;
