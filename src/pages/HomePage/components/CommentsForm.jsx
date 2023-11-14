import { useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

// images
import plane from "../../../assets/img/paper-plane.svg";

const CommentsForm = () => {
    const [comment, setComment] = useState("");

    const submitComment = (e) => {
        e.preventDefault();
        console.log(comment);
        setComment("");
    };

    return (
        <form onSubmit={submitComment} className="commentsBlock__form">
            <UserCycle name={{ firstName: "Nazar", lastName: "Tymiv" }} />
            <div className="commentsBlock__input">
                <InputElement
                    placeholder="Add a comment..."
                    value={comment}
                    setValue={setComment}
                />
                <button className="commentsBlock_button">
                    <img src={plane} />
                </button>
            </div>
        </form>
    );
};

export default CommentsForm;
