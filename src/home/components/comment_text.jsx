
export default function Comment_Text({comment}){
    return (
        <div className="comment_message">
            <b>
                {comment.user.firstName}
                &nbsp; 
                {comment.user.lastName}
            </b>
            <br/>
            <br/>
            {comment.message}
        </div>

    )
}