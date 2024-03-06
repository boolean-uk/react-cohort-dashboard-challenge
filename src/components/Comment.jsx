import { useState } from "react";
import PropTypes from "prop-types";

function Comment({ comment, contacts }) {
  const [user, setUser] = useState("");

  useState(() => {
    // eslint-disable-next-line react/prop-types
    const thisUser = contacts.find(
      (x) => parseInt(x.id) === parseInt(comment.contactId)
    );
    setUser(thisUser);
  }, []);

  return (
    <div className="yellow-comment">
      {user === undefined || user === "" ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="profile-icon-contact">
            <div id="profile-icon-id-contact">
              {user.firstName.charAt(0) + "" + user.lastName.charAt(0)}
            </div>
          </div>
          <h4>{user.firstName + " " + user.lastName} </h4>
          <p>{comment.content}</p>
        </div>
      )}
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  comment: PropTypes.object,
  contacts: PropTypes.array,
};
