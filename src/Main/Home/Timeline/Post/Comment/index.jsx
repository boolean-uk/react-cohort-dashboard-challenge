import './style.css'

function Comment({comment}) {
    console.log("c is for", comment)

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