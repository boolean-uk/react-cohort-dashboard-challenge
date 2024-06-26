import { useContext, useEffect, useState } from "react"
import { StateContext } from "../App"
import { Link, useLocation, useNavigate } from "react-router-dom"
import trashIcon from '../assets/images/trash-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'
import AddComment from "./AddComment"

export default function Comment(props) {
    const [comments, setComments] = useState([])
    const [showPreviousComments, setShowPreviousComments] = useState(false)
    const { post } = props
    const { authors } = useContext(StateContext)

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    }, [post])

    const loadedComments = () => {
        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    }

    const handleClick = () => {
        setShowPreviousComments(true)
    }

    const visibleComments = showPreviousComments ? comments : comments.slice(-3)

    const visibleCommentsRoute = location.pathname.length > 1 ? comments : visibleComments

    return (
        <>
            {comments.length > 3 && !showPreviousComments && location.pathname.length <= 1 &&
                <b onClick={handleClick} style={ { cursor: 'pointer', justifySelf: 'left' }}>See previous comments</b>
            }
            {visibleCommentsRoute.map(comment => {
                const commentAuthor = authors.find(author => author.id === comment.contactId)
                
                if (!commentAuthor) {
                    return null 
                } else {
                    return (
                        <div key={comment.id} className="comment">
                            <Link to={`/contact/${commentAuthor.id}`}>
                                <figure style={{ backgroundColor: `${commentAuthor.favouriteColour}` }}>
                                    <figcaption>
                                        {commentAuthor.firstName[0]}{commentAuthor.lastName[0]}
                                    </figcaption>
                                </figure>
                            </Link>
    
                            <div id="author-comment">
                                <Link to={`/contact/${commentAuthor.id}`}>
                                    <h5>
                                        {commentAuthor.firstName} {commentAuthor.lastName}
                                    </h5>
                                </Link>

                                <div>
                                    <img 
                                        src={editIcon} 
                                        onClick={() => navigate(`/comment/update/${comment.id}`)}
                                    />

                                    <img 
                                        src={trashIcon} 
                                        onClick={() => {
                                            fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment/${comment.id}`, {
                                                method: 'DELETE'
                                            }).then(() => {
                                                loadedComments()
                                            })
                                        }}
                                    />
                                </div>
    
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    )   
                }
            })}
            <AddComment 
                post={post} 
                onCommentAdded={loadedComments} 
            />
        </>
    )   
}