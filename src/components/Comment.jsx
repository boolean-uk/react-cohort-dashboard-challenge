import UserCircle from "./UserCircle"
import { useContext, useState, useEffect } from "react"
import { AppContext } from '../App'
import AuthorName from "./Author"

function Comment({post, comment}) {
    const { authors, comments, setComments } = useContext(AppContext)
    const [author, setAuthor] = useState(undefined)
    const [editing, setEditing] = useState(false)
    const [stateComment, setStateComment] = useState(undefined)
    // Need to store the comment in state so that we can update it...

    useEffect(() => {
        if (comment) {
            setStateComment(comment)
            const newAuthor = authors.find((a) => a.id === comment.contactId)
            setAuthor(newAuthor)
        }
    }, [authors, author, comment])

    if (!stateComment) return <p>Loading...</p>

    const handleChange = (event) => {
        const {name, value } = event.target 
        setStateComment({ ...stateComment, [name]: value });
    };

    const handleEdit = () => {
        console.log(comment)
        setEditing(true)
    }

    const handleSave = () => {
        // Update the existing comment...
        const newComments = comments.map((c) => {
            if (Number(c.id) === Number(stateComment.id)) {
                return stateComment
            } else {
                return c
            }
        })

        // Update the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/post/${post.id}/comment/${stateComment.id}`, {
            method: "PUT",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(stateComment),
        })

        // Set the new comments...
        setComments(newComments)
        setEditing(false)
    }

    const handleDelete = () => {
        const newComments = comments.filter((c) => c !== stateComment)
        setComments(newComments)

        // Remove it from the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/post/${post.id}/comment/${stateComment.id}`, {
            method: "DELETE",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            }
        })
    }

    return (
        <li className="viewComment">
            <UserCircle user={author}/>
            <div className="viewCommentContent">
                <h5><AuthorName author={author}/></h5>
                {editing ?
                <p>
                    <input
                    type="text"
                    name="content"
                    value={stateComment.content}
                    onChange={handleChange}
                    style={{font: "inherit"}}
                    size={`${stateComment.content.length}`}
                    />
                </p> :
                <p>{stateComment.content}</p>
                }
                {editing ?
                <button onClick={handleSave}>Save</button>
                :
                <button onClick={handleEdit}>Edit</button>
                }
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}

export default Comment