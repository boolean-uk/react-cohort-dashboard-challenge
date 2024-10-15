import { useContext, useState } from "react"
import { LoginContext, PostContext } from "../App"


function CreatePost() {
    const { user } = useContext(LoginContext)
    const { fetchPosts } = useContext(PostContext)

    const postBody = {
        title: "",
        content: "",
        contactId: user.id
      }

    const [submition, setPost] = useState(postBody)
    const postPost = () => {
        fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/post",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
                body: JSON.stringify(submition),
            },
        ).then(Response => {
            if(Response.ok){
                setPost(postBody)
                fetchPosts()
                return Response.json()
            }
            throw Response
        
            }).catch(error => {
              console.error("Error fetching data: ", error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(submition)
        postPost()
    }   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Title"
            type="text" 
            id="title"
            name="title"
            onChange={e => setPost({...submition, title: e.target.value})}
            value={submition.title}
            />
            <input
            placeholder="What's on your mind?"
            type="text"
            id="postContent"
            name="postContent"
            onChange={e => setPost({...submition, content: e.target.value})}
            value={submition.content}
            />
            <button type="submit">Post</button>
        </form>
        </>
    )
}

export default CreatePost