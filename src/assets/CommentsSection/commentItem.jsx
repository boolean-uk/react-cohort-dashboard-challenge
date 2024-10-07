import { useState, useContext, useEffect } from "react";
import { FeedContext } from "../../App";

export default function CommentItem( {comment} ) {
    const userContext = useContext(FeedContext);
    const [user, setUser] = useState();

    const fetchUser = async () => {
      const response = await fetch(
        `https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${comment.contactId}`
      );
      const data = await response.json();
      setUser(data);
    };
    
    useEffect(() => {
      fetchUser();
    }, []);
  

  
  return (
    <>
      <div className="commentSection">
        <div className="Image" style={{ backgroundColor: user ? user.favouriteColour :'#ffffff' }}>
        {user ? <p>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p> : <p>?</p>}

        </div>
        <div className="commentBubble">
        {comment ? <p>{comment.content}</p> : <p>Loading...</p>}
        
        </div>
      </div>
    </>
  );
}
