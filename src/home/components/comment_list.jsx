import Comment from "./comment"
export default function Comment_List({comments}){

    //const comments=[1,2,3]
    return (
        <div className="comment_list">
            {comments.map((comment, index) => <Comment comment={comment} key={index} />)}

        </div>
        
        
    )
}