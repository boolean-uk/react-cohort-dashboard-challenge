import Comment from "./Comment";

export default function CommentList(props) {
    const {comments} = props
    return (
        <li >
            <p className="see-comments">See previous comments</p>
            <ul className="comment-list">
                {
                    comments.map((comment,index) => {
                        return <Comment key={index} comment={comment}/>
                    })
                }
            </ul>
        </li>
    )    
}   
            
            
            