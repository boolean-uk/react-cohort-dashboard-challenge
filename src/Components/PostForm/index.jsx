import { useState } from "react"

const INPUT_DATA = {
    title: '',
    content: ''
}

export default function PostForm({getPosts, currentUserId}) {
    const [form, setForm] = useState(INPUT_DATA)

    // const isDisabled = form.length === 0

    const currentUser = Number(currentUserId)

    const handleChange = (event) => {

        const {name, value} = event.target

        setForm({...form, [name]: value, contactId: currentUser})

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(form)
          }

        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post`, options)
        .then(res => res.json())
        .then(data => getPosts(data))

        setForm(INPUT_DATA)
    }

    // const handleClick = () => {
    //     if (isDisabled) {
    //         return alert("You must enter a word")
    //     }else {
    //         getPosts()
    //     }
    // }

    return (
        <div className="post-form-container">
             <div className="user-img-container">
                IS
             </div>

             <form className="post-form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    value={form.title}  
                    onChange={(event) => handleChange(event)}
                    />

                    <input 
                    type="text" 
                    placeholder="What's in your mind?" 
                    name="content" value={form.content} 
                    onChange={(event) => handleChange(event)}
                    />
                </div>
                <button type="submit">Post</button>
             </form>
        </div>
    )
}