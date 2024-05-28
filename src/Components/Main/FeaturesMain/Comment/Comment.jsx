import { useContext, useEffect, useState } from 'react'
import ProfilePicture from '../../../ProfilePicture'
import Commenting from './Commenting/Commenting'
import { UserContext } from '../../../../App'
import PropTypes from 'prop-types'

// Define the Comment component which takes id as a prop
export default function Comment(props) {
    // Destructuring id from props
    const { id } = props
    console.log('id:', id)

    // Use useState hook to manage comments state
    const [comments, setComments] = useState([])

    // Use useContext hook to access user context
    const {user} = useContext(UserContext)

    // Using useState hook to manage form state
    const [formState, setFormState] = useState({
        comment:'' // Initializing comment state
    })

    // Function to handle form input change
    function handleChange(e){
        setFormState({...formState, [e.target.name] : e.target.value})
    }

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault()

        // Creating options for the POST request
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content:formState.comment, contactId:user.id, postId:id})
        }

        // Sending POST request to add a comment
        fetch(`https://boolean-api-server.fly.dev/Shaun-Harris/post/${id}/comment` , options)
        .then(response => response.json())
        .then(json => setComments([...comments, json])) // Updating comments state with the new comment
        .catch(err => console.error(err)) // Logging any errors to the console

        // Resetting formState after submission
        setFormState({comment:''})
    }

    // Effect to fetch comments when the id prop changes
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/Shaun-Harris/post/${id}/comment`)
        .then(response => response.json())
        .then(json => setComments([...json])) // Updating comments state with fetched comments
    }, [id])

        return (
            <>
            <ul className='commented'>
                {comments.map((comment) => {
                    return <Commenting key={`comment-${comment.id}`} authorId={comment.contactId} body={comment.content} postId={id}/>
                })}
            </ul>

            <div className='comment-form'>
                <ProfilePicture />
                <form onSubmit={handleSubmit}>
                    <input type ="text" placeholder='Add a comment!' name='comment' value={formState.comment} onChange={handleChange}/>
                    <button type="submit">
                        {'>'}
                    </button>
                </form>
            </div>
            </>
        )
}

Comment.propTypes =  {
    id: PropTypes.string.isRequired
}