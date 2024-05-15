import { useContext, useEffect, useState } from "react"
import { StateContext } from "../App"
import { useLocation } from "react-router-dom"

export default function Comment(props) {
    const [comments, setComments] = useState([])
    const [showPreviousComments, setShowPreviousComments] = useState(false)
    const { post } = props
    const { authors } = useContext(StateContext)

    const location = useLocation()

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    }, [post])

    const handleClick = () => {
        setShowPreviousComments(true)
    }

    const visibleComments = showPreviousComments ? comments : comments.slice(0, 3)

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
                            <figure style={{ backgroundColor: `${commentAuthor.favouriteColour}` }}>
                                <figcaption>
                                    {commentAuthor.firstName[0]}{commentAuthor.lastName[0]}
                                </figcaption>
                            </figure>
    
                            <div id="author-comment">
                                <h5>
                                    {commentAuthor.firstName} {commentAuthor.lastName}
                                </h5>
    
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    )   
                }
            })}
        </>
    )   
}