import Comment from "./Comment";

export default function CommentList() {
    return (
        <li >
            <p className="see-comments">See previous comments</p>
            <ul className="comment-list">
                <Comment />
                <Comment />
                <Comment />
            </ul>
        </li>
    )    
}   
            
            
            