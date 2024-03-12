import { useContext, useState } from "react"
import { NameContext } from "../App"


function AddComment({ setComments }) {
    const [comment, setComment] = useState('')
    const { initials } = useContext(NameContext)

    const Send = (event) => {
        if (comment.trim() === '') {
            return
        }
        setComments(comment)
        setComment('')
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }


    return (

        <div className="addComment">
            <span className="initials postInitials">{initials}</span>
            <input type="text" value={comment} onChange={handleChange} name="comment" placeholder="Add a comment..." />
            <img onClick={Send} src='https://www.pinclipart.com/picdir/big/201-2016537_send-message-icon-white-clipart-computer-icons-clip.png' />

        </div>
    )
}

export default AddComment