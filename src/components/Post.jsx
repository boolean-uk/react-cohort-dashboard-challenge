import { useState } from "react";

export default function Post({post}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchData = () => {
          fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/post/${post.id}/comment`)
          .then(response => response.json())
          .then(data => {
            setPosts(data)
          })
        }
    
        fetchData();
      }, []);

    return (


        <>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className="comments">
        <p></p>
        </div>
        </>


    )


}