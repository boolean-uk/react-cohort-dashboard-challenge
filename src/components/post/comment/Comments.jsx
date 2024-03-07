import PropTypes from "prop-types";
import "../../../style/post/comment/Comments.css";
import Comment from "./Comment";
import { useState } from "react";

const getLastThreeItems = (arr) => {
    if (arr.length <= 3) {
        return arr;
    } else {
        return arr.slice(-3);
    }
};

const Comments = ({ comments }) => {
    const [showAll, setShowAll] = useState(false);
    let commentsToRender = getLastThreeItems(comments);
    if (showAll) commentsToRender = [...comments];

    return (
        <ul className="comment-list">
            {comments.length > 3 ? (
                <button
                    className="comment-list-btn"
                    onClick={() => setShowAll(!showAll)}
                >
                    {!showAll ? "See previous comments" : "Show less"}
                </button>
            ) : (
                <></>
            )}
            {commentsToRender.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </ul>
    );
};

export default Comments;
Comments.propTypes = {
    comments: PropTypes.array.isRequired,
};
