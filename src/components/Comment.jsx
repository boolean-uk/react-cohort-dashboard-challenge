import { useEffect, useState } from "react"

export default function Comment(props) {
    const [comments, setComments] = useState([])
    const { post, authors  } = props

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    }, [post])

    return (
        <>
            {comments.map(comment => {
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