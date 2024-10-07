import React from 'react'

const CommentitemComponent = (props) => {
    const { comment } = props
    return (
        <>
        <div className="commentitem-wrapper">
            <div style={{backgroundColor: comment.author.favouriteColour}} className="postbody-profilepicture">
                        {comment.author.profileImage ? (
                            <>
                                <img style={{borderRadius: '100px', width: 50, height: 50}} src={comment.author.profileImage}/>
                            </>
                        ) : (
                            <>
                                <p>{comment.author.firstName.charAt(0)}{comment.author.lastName.charAt(0)}</p>
                            </>
                        )}
                        
            </div>

            <div className="commentitem-content">


                <p>{comment.author.firstName} {comment.author.lastName}</p>

                <p>{comment.content}</p>
            </div>
        
        </div>
        </>
    )
}

export default CommentitemComponent
