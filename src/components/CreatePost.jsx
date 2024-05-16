import { useContext, useState } from "react"
import { StateContext } from "../App"

export default function CreatePost() {
    const [newPost, setNewPost] = useState({
        title: '',
        content: ''
    })
    
    const { loadedPosts, randomAuthor } = useContext(StateContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: newPost.title,
                content: newPost.content,
                contactId: randomAuthor.id
            })
        }).then(() => {
            loadedPosts()
            setNewPost({
                title: '',
                content: ''
            })
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setNewPost({
            ...newPost,
            [name]: value
        })
    }

    return (
        <section id="create-post">
            {randomAuthor &&
                <>
                    <figure style={{ backgroundColor: `${randomAuthor.favouriteColour}` }}>
                        <figcaption>
                            {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                        </figcaption>
                    </figure>

                    <form id="form-post" onSubmit={handleSubmit}>
                        <div>
                            <input 
                                type="text" 
                                name="title" 
                                value={newPost.title}
                                placeholder="Title"
                                onChange={handleChange}
                                required
                            />

                            <input 
                                type="text" 
                                name="content" 
                                value={newPost.content}
                                placeholder="What's on your mind?"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit">Post</button>
                    </form>
                </>
            }
        </section>
    )
}