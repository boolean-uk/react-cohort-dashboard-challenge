import { useEffect, useState } from "react";
import { getUserById } from "../../util/api";
import Avatar from "../Avatar";
import Internal from "../containers/Internal";
import { getFullName, getInitialsFromUser } from "../../util/misc";

function Comment({ comment }) {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    getUserById(comment.contactId, setOwner);
  }, [comment.contactId]);

  if (!owner) {
    return <div>Loading comment...</div>;
  }

  return (
    <Internal>
      <Avatar
        bgColor={owner.favouriteColour}
        initials={getInitialsFromUser(owner)}
        textColor={"var(--primary)"}
      />
      <Internal className={"comment"}>
        <h4>{getFullName(owner)}</h4>
        {comment.content}
      </Internal>
    </Internal>
  );
}

export default Comment;
