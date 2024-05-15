import { useContext, useEffect , useState} from 'react'
import ProfileImage from '../../../ProfileImage'
import Comment from './Comment'
import { UserContext } from '../../../../App'

export default function CommentBox(props) {
    const [comments, setComments] = useState([])
    const {id} = props
    const {user} = useContext(UserContext)

    const [formState, setFormState] = useState({
        comment:""
    })

    function handleChange(e){
        setFormState({...formState , [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content:formState.comment, contactId:user.id, postId:id})
          }
        
        fetch(`https://boolean-uk-api-server.fly.dev/angustownsley/post/${id}/comment` , options)
        .then(response => response.json())
        .then(json => setComments([...comments, json]))
        .catch(err => console.err(err))

    }

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/angustownsley/post/${id}/comment`)
        .then(response => response.json())
        .then(json => setComments([...json]))
    }, [])
    
    return (
        <>
            <ul className='comments'>
                {comments.map((e) => {
                   return <Comment key={`post-${id}-comment-${e.id}`} authorId={e.contactId} body={e.content} id={id}/>
                })}
            </ul>

            <div className='comment-form'> 
                <ProfileImage />
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Write a Comment' name='comment' value={formState.comment} onChange={handleChange}/>
                    <button type="submit">
                        {'>'}
                    </button>
                </form>
            </div>
        </>
    )
}
