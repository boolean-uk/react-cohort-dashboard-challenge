import { useContext, useEffect, useState } from "react";
import { FeedContext } from "../../App";


export default function AddComment( {post, comments, setComments} ) {
  const context = useContext(FeedContext)
  const signedInUsr = context.signedInUsr;

  const initialData = {
    postId: post.id,
    contactId: signedInUsr.id,
    content : ''
  }

  const [commentData, setCommentData] = useState(initialData);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    console.log(inputName, inputValue)

    if(inputName == "add-comment"){
      setCommentData({...commentData, content: inputValue})
    }
  }

  const postComment = async (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData),
    };

    const response = await fetch(`https://boolean-uk-api-server.fly.dev/LudwigJL/post/${post.id}/comment`, requestOptions);
    const data = await response.json();
    setComments([...comments, data]);
  }

  return (
    <>
      <div className="make-content-form">
        <div className="Image" style={{ backgroundColor: signedInUsr ? signedInUsr.favouriteColour :'#ffffff' }}>
          {signedInUsr ? <p>{signedInUsr.firstName.charAt(0)}{signedInUsr.lastName.charAt(0)}</p> : <p>?</p>}
        </div>

        <input 
        type="text" 
        name="add-comment" 
        placeholder="Add a comment..."
        onChange={handleChange} />
        <button onClick={postComment} className="send-button">Send</button>
      </div>
    </>
  );
}
