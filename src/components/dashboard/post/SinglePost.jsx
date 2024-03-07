import PostComment from "./PostComment";
import PostHistory from "./PostHistory";
import "../../../style/dashboard/singlePost.css";

const SinglePost = (props) => {
    const {post} = props ?? {};

    


    return(
        <>
        <div className="singlePost-container">
        <div className="singlePost-header">
            <div className="singlePost-title">
                {post.title}
            </div>
            <div>
                {post.content}
            </div>
        </div>
        
        <div className="singlePost-postHistory">
            <PostHistory post={post}/>
        </div>
        <div className="singlePost-postComment">
            <PostComment post={post}/>

        </div>
        </div>
        </>
    )
}

export default SinglePost;