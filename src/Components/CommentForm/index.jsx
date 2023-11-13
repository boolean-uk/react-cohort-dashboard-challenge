
import { useState } from 'react'
import SendIcon from '/src/assets/icons/send-icon.svg'


const INPUT_DATA = {
    content: ''
}

export default function CommentForm({post, user, getComments}) {
    const [form, setForm] = useState(INPUT_DATA)

    // const currentUser = Number(currentUserId)
    
    const commentPostURL = `https://boolean-api-server.fly.dev/ilham-saleh/post/${post.id}/comment`
    
    const handleChange = (event) => {
        const {name, value} = event.target
        
        setForm({
            ...form,
             [name]: value, 
             contactId: user.id, 
             postId: post.id
            })
    }
    
    const handleSubmit= (e) => {
        e.preventDefault();


        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(form)
          }

        fetch(commentPostURL, options)
        .then(res => res.json())
        .then(data => {
            getComments(data)
        })

        setForm(INPUT_DATA)

    }


    return (
        <div className="comment-form-container">
            <div className="user-img-container">IS</div>
            <div className="comment-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Reply...' name='content' value={form.content} onChange={(event) => handleChange(event)}/>
                    <button type='submit'><img src={SendIcon} alt="send-icon" className='send-icon'/></button>
                </form>
            </div>

        </div>
    )
}