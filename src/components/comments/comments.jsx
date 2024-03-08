import { useEffect, useState } from "react";
import Comment from './comment.jsx'
import NewComment from './newComment.jsx'
import '../../dashboard.css';

function Comments({ postId, baseURL, user, commentShowDefault }){

    const [comments, setComments] = useState([])
    const [showAllComments, setShowAllComments] = useState(commentShowDefault)

  useEffect(() => {
    fetch(`${baseURL}/post/${postId}/comment`)
      .then((response) => response.json())
      .then((data) => setComments(data));
    }, [baseURL, postId, setComments]);

    const showComments = () => {
      setShowAllComments(!showAllComments)
    }

    return(
        <main className="comments-section">
            <NewComment user={user} baseURL={baseURL} postId={postId}/>
            {
            [...comments]
            .sort((a, b) => b.id - a.id)
            .slice(0, showAllComments ? comments.length : 3)
            .map((comment, index) => (
                <Comment key={index} comment={comment} baseURL={baseURL} user={user}/>
                ))
            }
            {
              comments.length > 3 && (
                <button onClick={showComments} className="toggle-comments">
                  {showAllComments ? "Show Less" : "Show All Comments"}
                </button>
              )
            }
        </main>
    )
}
export default Comments