import { useContext } from 'react'
import './style.css'
import { UserContext } from '../../../../../App'

function Comment({comment}) {
    const userContext = useContext(UserContext)

    return(
        <div className="comment">
            <div>Picture</div>
            <div className="comment-name-content">
                <h4>Name</h4>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment