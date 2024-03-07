import { useContext, useState } from "react";
import { MyContext } from "../App.jsx";

function getInitialComment() {
    
    return {
      
      content: '',
      contactId: 1,
      postId: null
    }
}

export default function CreateComment({postId, comments, setComments}) {
    const [comment, setComment] = useState(getInitialComment())
    const context = useContext(MyContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setComment({
          ...comment,
          [name]: value,
        })
        
    }
    /*
{"id":3,"postId":10,"contactId":13,"content":"Corona vito tempore debilito culpo quasi coaegresco delectus."} 
*/ 

    const handleSubmit = async (e) => {
      e.preventDefault();

      const commentToSend = {
        ...comment,
        contactId: 1,
        postId: postId
    };
      console.log("Comment Data:", commentToSend);
      

      const response = await fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/post/${postId}/comment`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(commentToSend),
      });

      if (response.ok) {
          const newComment = await response.json();
          setComments([...comments, newComment]);
          setComment(getInitialComment());
      } else {
          console.error("Failed to create a new comment", e);
      }
  };

    return (
        <div className="addComment">
        <form onSubmit={handleSubmit}>
            <label>
              <input type="text" name="content" onChange={handleChange} value={comment.comment} className="postInput" placeholder="Comment: " ></input>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Post!" className="postButton"></input>
        </form>
        </div>
    )
}
