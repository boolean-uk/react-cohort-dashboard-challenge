import "/src/style/CreatePost.css"
import { useState } from "react";

export default function CreatePost(){
    
    const [form, setForm] = useState({
        title: "",
        content: "",
        contactid: 1,
    })

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        form.contactid = 1;
        fetch('https://boolean-api-server.fly.dev/StianNordvik/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    return (
        <div className="createPost">
            <b>Create Post</b>
            <form className="postForm" onSubmit={handleFormSubmit}>
                <p><label htmlFor="title">Title</label></p>
                <p><input type="text" name="title" id="title" value={form.title} onChange={handleFormChange} /></p>
                <p><label htmlFor="title">Content</label></p>
                <p><input type="text" name="content" id="content" value={form.content} onChange={handleFormChange}/>
                </p>
                <p><button type="submit" className="btnPost">Post</button></p>
            </form>
        </div>
    )


}