import ProfilePicture from '../../../ProfilePicture'
import { PostContext, UserContext } from '../../../../App'
import { useContext, useState } from 'react'

export default function PostCreate() {
    // Using useContext hook to access user context
    const {user} = useContext(UserContext)

    // Using useContext hook to access getPosts function from PostContext
    const {getPosts} = useContext(PostContext)

    // Using useState hook to manage form state
    const [formState, setFormState] = useState({
        title:"", // Initializing title state
        content:"" // Initializing content state
    })

    // Function to handle form input change
    function handleChange(e){
        setFormState({...formState , [e.target.name] : e.target.value})
    }

    // Function to handle form submission
    function handleSubmit(e){
        e.preventDefault() // Preventing default form submission behavior

        // Extracting form data
        const title = formState.title
        const content = formState.content
        const contactId = user.id

        // Creating options for the POST request
        const options ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: title, content: content, contactId: contactId})
        }

        // Sending POST request to create a new post
        fetch('https://boolean-api-server.fly.dev/Shaun-Harris/post', options)
        .then(response => response.json())
        .then(() => getPosts()) // Fetching posts again to update the list
        .catch(err => console.error(err)) // Logging any errors to the console

        // Resetting formState after submission
        setFormState({
            title:"",
            content:""
        })
    }
    
    // Rendering the component
    return (
        <div className="post-create">
            {/* Rendering the ProfilePicture component */}
            <ProfilePicture/>

            {/* Rendering the form for creating a new post */}
            <form onSubmit={handleSubmit}>
                
                {/* Textarea for entering post content */}
                <textarea placeholder="Whats on your mind?" name="content" value={formState.content} onChange={handleChange}/>
                
                {/* Submit button */}
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
