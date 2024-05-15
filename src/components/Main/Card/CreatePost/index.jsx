import ProfileImage from "../../../ProfileImage";
import { PostsContext, UserContext } from "../../../../App";
import { useContext, useState } from "react";
export default function CreatePost() {
    const {user} = useContext(UserContext)
    const {getPosts} = useContext(PostsContext)


    const[formState, setFormState] = useState({
        title:"",
        content:""
    })


    function handleChange(e){
        setFormState({...formState , [e.target.name] : e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        const title = formState.title
        const content = formState.content
        const contactId = user.id


        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title:title, content:content, contactId:contactId})
          }
        
          
          fetch('https://boolean-uk-api-server.fly.dev/angustownsley/post', options)
            .then(response => response.json())
            .then(() => getPosts())
            .catch(err => console.error(err))

            setFormState({
                title:"",
                content:""
            })

        return

    }
    
    return (
        <div className="create-post">
        <ProfileImage/>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formState.title} onChange={handleChange}/>
            <textarea placeholder="Create a post!" name="content" value={formState.content} onChange={handleChange}/>
            <button type="submit">Post</button>
        </form>
        </div>
    )
}