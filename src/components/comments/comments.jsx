import { useEffect, useState } from "react";
import Comment from './comment.jsx'
import NewComment from './newComment.jsx'

function Comments({ postId, baseURL, user }){

    console.log(postId)
    const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/post/$${postId}/comment`)
      .then((response) => response.json())
      .then((data) => setComments(data));
    }, [baseURL, postId, setComments]);


    return(
        <main className="main green">
            <NewComment user={user} baseURL={baseURL} postId={postId}/>
            {
            [...comments]
            .sort((a, b) => b.id - a.id)
            .map((comment, index) => (
                <Comment key={index} comment={comment} baseURL={baseURL} />
                ))
            }
        </main>
    )
}
export default Comments