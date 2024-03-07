import PropTypes from "prop-types";
import "../../style/post/Post.css";
import UserIcon from "../icons/UserIcon";
import { useContext, useEffect, useState } from "react";
import { postContext } from "../../App";
import Comments from "./comment/Comments";

const Post = ({ post }) => {
    const { contacts } = useContext(postContext);
    let owner = contacts.find((c) => c.id === post.contactId);
    if (owner === undefined)
        owner = {
            firstName: "Unknown",
            lastName: "User",
        };

    const [commentData, setCommentData] = useState([]);

    const getCommentData = async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/post/" +
                post.id +
                "/comment"
        );
        const data = await response.json();
        console.log(data);
        setCommentData([...data]);
    };

    useEffect(() => {
        getCommentData();
    }, []);

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
            <Comments comments={commentData} />
        </li>
    );
};

export default Post;
Post.propTypes = {
    post: PropTypes.object.isRequired,
};
