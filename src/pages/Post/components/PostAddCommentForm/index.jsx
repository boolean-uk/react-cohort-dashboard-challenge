import { useContext, useState } from "react"
import "./styles.css"
import UserIcon from "@/components/UserIcon"
import PropTypes from 'prop-types';
import { LoggedInUserContext } from "@/App"

const inititalUserState = {content: ""}

export default function PostAddCommentForm({postId, setComments, comments}) {
    const [ userData, setUserData] = useState(inititalUserState)

    const { loggedInUser } = useContext(LoggedInUserContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Updating API and local state with new comment
    const handleSubmit = (e) => {
        e.preventDefault();
        const createdComment = {...userData, contactId: loggedInUser.id, postId: postId}
        fetch(`https://boolean-api-server.fly.dev/Agatland/post/${postId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(createdComment),
            }).then(res => res.json())
            .then(data => {
            if (data) {
                setComments([...comments, data])
            }
            }).catch(error => console.error("Problem with creating post: ", error))

        setUserData(inititalUserState)
    };

    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <UserIcon userToIcon={loggedInUser}/>
            <input 
                name="content" 
                type="text"
                placeholder="Add a comment..."
                value={userData.content}
                onChange={handleChange}
            />
            <button type="submit">
            <svg fill="#000000" width="30px" height="30px" viewBox="-4.56 -4.56 33.12 33.12" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)">
            <rect x="-4.56" y="-4.56" width="33.12" height="33.12" rx="16.56" fill="#cdd5e4" strokeWidth="0"/>
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"/>
            <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" d="M1.513 1.96a1.374 1.374 0 011.499-.21l19.335 9.215a1.146 1.146 0 010 2.07L3.012 22.25a1.374 1.374 0 01-1.947-1.46L2.49 12 1.065 3.21a1.374 1.374 0 01.448-1.25zm2.375 10.79l-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 010 1.5H3.888z"/>
            </g>
            </svg>
            </button>
        </form>
    )
}

PostAddCommentForm.propTypes = {
    postId: PropTypes.number,
    setComments: PropTypes.func,
    comments: PropTypes.array,
  };