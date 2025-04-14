import { Context } from "./App";
import { useContext } from "react";
import Propic from "./Propic";

export default function Comment({ commentText, commenterId }) {
  const [currentUser, contacts] = useContext(Context);

  let currentContact = {};

  if (commenterId == 0) {
    currentContact = currentUser;
  } else {
    currentContact = contacts.find((target) => target.id === commenterId);
  }

  return (
    <div className="comment">
      <Propic
        contact={currentContact}
        bgColor={currentContact.favouriteColour}
      />
      <div className="comment-text">
        <h4>
          {currentContact.firstName} {currentContact.lastName}
        </h4>
        <p>{commentText}</p>
      </div>
    </div>
  );
}
