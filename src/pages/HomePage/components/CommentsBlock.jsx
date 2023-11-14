// components
import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";
import CommentsList from "./commentsList";
import { getComments } from "../../../utilities/api";

const CommentsBlock = ({ user, postId }) => {
    const [comments, setComments] = useState([]);

    const getAllComments = () =>
        getComments(postId).then((data) => setComments(data));

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <div className="commentsBlock">
            {comments.length && <CommentsList comments={comments} />}

            <CommentsForm user={user} />
        </div>
    );
};

export default CommentsBlock;
