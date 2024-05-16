import { createContext, useContext, useState } from "react"
import { StateContext } from "../App"
import { useNavigate, useParams } from "react-router-dom"
import UpdatePostInputs from "./UpdatePostInputs"

export const UpdatePostContext = createContext()

export default function UpdatePost() {
    const [updatePost, setUpdatePost] = useState({
        title: '',
        content: ''
    })

    const { posts, loadedPosts, authors } = useContext(StateContext)

    const { id } = useParams()

    const findAuthor = authors.find(author => author.id === Number(id))

    console.log(findAuthor) /* undefined if it's a new post */

    const updatedPost = posts.find(post => post.id === Number(id))

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setUpdatePost({
            ...updatePost,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: updatePost.title,
                content: updatePost.content,
                contactId: findAuthor.id
            })
        }).then(() => {
            loadedPosts()
        })

        navigate('/')
    }

    return (
        <UpdatePostContext.Provider value={ { handleChange, updatePost, updatedPost } }>
            <form onSubmit={handleSubmit} className="update-post">
                {updatedPost &&
                    <>
                        <h1>Post</h1>

                        <UpdatePostInputs />
                    </>
                }
            </form>
        </UpdatePostContext.Provider>
    )
}