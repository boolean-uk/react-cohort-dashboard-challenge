import PropTypes from "prop-types";
import "../../style/post/Post.css";
import UserIcon from "../icons/UserIcon";
import { useContext } from "react";
import { postContext } from "../../App";

const Post = ({ post }) => {
    const { contacts } = useContext(postContext);
    let owner = contacts.find((c) => c.id === post.id);
    if (owner === undefined)
        owner = {
            firstName: "Unknown",
            lastName: "User",
        };

    return (
        <li className="list-item">
            <div className="post-owner">
                <UserIcon
                    firstName={owner.firstName}
                    lastName={owner.lastName}
                />
                <div className="owner-info">
                    <h2>{owner.firstName + " " + owner.lastName}</h2>
                    <p>{post.title}</p>
                </div>
            </div>
            <p>{post.content}</p>
            <hr />
        </li>
    );
};

export default Post;
Post.propTypes = {
    post: PropTypes.object.isRequired,
};
