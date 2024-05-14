import { useEffect , useState} from 'react'
import ProfileImage from '../../../ProfileImage'
import Comment from './Comment'

export default function CommentBox(props) {
    const [comments, setComments] = useState([])
    const {id} = props

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/angustownsley/post/${id}/comment`)
        .then(response => response.json())
        .then(json => setComments([...json]))
    }, [])
    
    return (
        <>
            <ul className='comments'>
                {comments.map((e, index) => {
                   return <Comment key={index} authorId={e.contactId} body={e.content} id={id}/>
                })}
            </ul>

            <div className='comment-form'> 
                <ProfileImage />
                <form >
                    <input type="text" placeholder='Write a Comment'/>
                    <button type="submit">
                        {'>'}
                    </button>
                </form>
            </div>
        </>
    )
}
