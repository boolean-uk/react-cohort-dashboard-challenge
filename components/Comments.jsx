import { useState } from "react"

export default function comment() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [comments, setComments] = useState({
        postId: 0,
        contactId: 0,
        content: ''
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        console.log(value)

        setComments({
            ...comments,
            [name]: value
        })

    }


    return (

        <div className="comment-input">
            <input id="input-comment" type="text" name='content' placeholder="Add a comment..." onChange={handleChange}/>
            <button className="material-symbols-outlined" >send</button>    
        </div>

    )

}