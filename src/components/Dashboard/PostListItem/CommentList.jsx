import { useEffect, useState } from "react"

function RenderComments({postId}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch()
    })

    return(
        <>

            {comments.length > 0 && (
                <div className="comments-section">
                    <div className="devider">
                    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </div>
                    {comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default RenderComments