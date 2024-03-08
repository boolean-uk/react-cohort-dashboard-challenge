import UserIcon from "../../components/icons/UserIcon";
import { useContext } from "react";
import { postContext } from "../../App";

const PostCreate = () => {
    const { user } = useContext(postContext);
    return (
        <div className="post-create">
            <UserIcon
                color={user.favouriteColour}
                firstName={user.firstName}
                lastName={user.lastName}
            />
            <input className="post-bar" placeholder="What's on your mind?" />
            <button className="post-btn">Post</button>
        </div>
    );
};

export default PostCreate;