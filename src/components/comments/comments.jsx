import { useContext, useEffect, useState } from "react";
import { MyContext } from "../posts/post.jsx";
import Comment from './comment.jsx'

function Comments(){

    const context = useContext(MyContext)
    const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`${context.baseURL}/post/${context.post.id}/comment`)
      .then((response) => response.json())
      .then((data) => setComments(data));
    }, [context.baseURL, context.post.id, setComments]);


    return(
        <main className="main green">
            {
              comments.map((comment, index) => (
                <Comment key={index} comment={comment} baseURL={context.baseURL} />
              ))
            }
        </main>
    )
}
export default Comments