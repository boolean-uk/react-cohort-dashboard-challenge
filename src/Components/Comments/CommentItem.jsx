import { useContext, useEffect, useState } from "react";
import { TempContext } from "./../../App";

function CommentItem({ keydata, post }) {
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
    favouriteColour: "#00FF00",
  });
  const { contactData } = useContext(TempContext);

  useEffect(() => {
    if(contactData.find((contact) => contact.id == post.contactId) != undefined){
    setAuthor(contactData.find((contact) => contact.id == post.contactId));
    }
  }, [contactData, post]);
  return (
    <div className="comment">
      <div
        className="profileIcon"
        style={{ background: author.favouriteColour }}
      >
        {author.firstName[0]}
        {author.lastName[0]}
      </div>
      <div className="comment-content">
        <p className="author">
          {author.firstName} {author.lastName}
        </p>
        {post.content}
      </div>
    </div>
  );
}

export default CommentItem;
