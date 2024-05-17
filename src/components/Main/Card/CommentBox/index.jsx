import { useContext, useEffect, useState } from 'react'
import ProfileImage from '../../../ProfileImage'
import Comment from './Comment'
import { UserContext } from '../../../../App'

export default function CommentBox(props) {
    const [comments, setComments] = useState([])
    const { id } = props
    const { user } = useContext(UserContext)

    const [formState, setFormState] = useState({
        comment: '',
    })

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: formState.comment,
                contactId: user.id,
                postId: id,
            }),
        }

        fetch(
            `https://boolean-uk-api-server.fly.dev/angustownsley/post/${id}/comment`,
            options
        )
            .then((response) => response.json())
            .then((json) => setComments([...comments, json]))
            .catch((err) => console.err(err))

        setFormState({ comment: '' })
    }

    useEffect(() => {
        fetch(
            `https://boolean-uk-api-server.fly.dev/angustownsley/post/${id}/comment`
        )
            .then((response) => response.json())
            .then((json) => setComments([...json]))
    }, [id])

    return (
        <>
            <ul className="comments">
                {comments.map((e) => {
                    return (
                        <Comment
                            key={`post-${id}-comment-${e.id}`}
                            authorId={e.contactId}
                            body={e.content}
                            id={id}
                        />
                    )
                })}
            </ul>

            <div className="comment-form">
                <ProfileImage />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Write a Comment"
                        name="comment"
                        value={formState.comment}
                        onChange={handleChange}
                    />
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
                                fill="#f0f5fa"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}
