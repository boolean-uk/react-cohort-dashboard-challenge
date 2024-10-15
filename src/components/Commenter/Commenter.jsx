import { useState, useEffect } from "react";
import './Commenter.css'
import CommentItems from "./CommentItems";

function Commenter({ postId }) {


    const getAllCommentsUrl = `https://boolean-uk-api-server.fly.dev/George-Alexander-S/post/${postId}/comment`;

    const [comments, setComments] = useState();

    const getComments = async () => {
        const response = await fetch(getAllCommentsUrl);
        const jsonData = await response.json();
        setComments(jsonData);
    }

    useEffect(() => {
        getComments();
        console.log(comments)
    }, [postId])

    const makeComment = async (data) => {
        const commentUrl = `https://boolean-uk-api-server.fly.dev/George-Alexander-S/post/${postId}/comment`

        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
        await fetch(commentUrl, settings);
        await getComments();
    };

    const [formData, setFormData] = useState({
        postId: postId,
        content: "",
        contactId: 1
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        makeComment(formData);
    }

    const [showAll, setShowAll] = useState(false);
    const maxComments = 3;
    const displayedComments = showAll ? comments.toReversed() : comments?.toReversed().slice(0, maxComments)

    return (
        <>
            <ul>
                {displayedComments?.map((comment) => (
                    <CommentItems
                    key={comment.id}
                    comment={comment}
                    />
                ))}
            </ul>
            {comments?.length> maxComments && (
                <button className="show-comment-button" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show less' : 'Show all comments'}
                </button>
            )}
            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    id="content"
                    name="content"
                    type="text"
                    placeholder={"Add a comment"}
                    onChange={handleChange}
                >
                </input>
                <button>Post</button>
            </form>
        </>
    )
}

export default Commenter