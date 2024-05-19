


import Comments from "../Comments"
import Post from "../Post"
import PostForm from "../PostForm"
import CommentForm from "../CommentForm"
import "./Home.css"




export default function Home(){
    
    return (
        <>
            <div className="home-container">
                <div className="new-post-form-wrapper">
                    <PostForm />
                </div>
                    <div className="posts-wrapper">
                        
                            <div className="post-wrapper">
                                <Post />
                                <div className="comments">
                                    <Comments />
                                </div>
                                <div className="comment-form-wrapper">
                                    <CommentForm/>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )


}

