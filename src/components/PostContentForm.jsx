import { useContext, useState } from "react"
import { DataContext } from "./MainComponent"
import { PostContext } from "./PostLi"

export default function PostContentForm() {
    const { post, update, setUpdate } = useContext(PostContext)
    const { postData, setPostData } = useContext(DataContext)
    const [updatePost, setUpdatePost] = useState({
        title: post.title,
		content: post.content,
		contactId: post.contactId
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUpdatePost({
            ...updatePost,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function updateAPost() {
            const options = {
                method: 'PUT',
                body: JSON.stringify(updatePost),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}`, options)
            const data = await response.json()

            setPostData(postData.map(p => {
                return p.id !== data.id ? p : data
              }))
        }

        updateAPost()

        setUpdate(!update)
    }

    return (
        <form className="post-content-form" onSubmit={handleSubmit}>
            <textarea name="content" id="post-content-textarea" value={updatePost.content} onChange={handleChange}></textarea>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}