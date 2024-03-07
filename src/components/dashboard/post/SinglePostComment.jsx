import "../../../style/dashboard/singlePostComment.css";

const SinglePostComment = (props) => {
    const {comment} = props ?? {};
  


    return(
        <>
        <div>
            {comment.content}
        </div>
        </>
    )
}

export default SinglePostComment;