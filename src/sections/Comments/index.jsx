import React, { useEffect, useState } from "react";

export const Comment = (prop) => {
  const { comment, users } = prop;
  const [user, setUser] = useState();

  const findUser = () => {
    return users.find((x) => x.id === comment.contactId);
  };
  useEffect(() => {
    setUser(findUser());
  }, []);

  return (
    <div>
      <h3>{user?.firstName + " " + user?.lastName}</h3>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
