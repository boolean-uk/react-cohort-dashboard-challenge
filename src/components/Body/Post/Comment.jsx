/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../Body.css";
export default function Comment({ comment }) {
  // Here I need to fetch contacts and instead of printing contactId I need to print their name
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/contact/${comment.contactId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((jsonData) => {
        setUser(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser, comment.contactId]);

  return (
    <>
      <div className="comment">
        <div className="comment-icon">
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </div>
        <div className="comment-box">
          {user.firstName} {user.lastName}: {comment.content}
        </div>
      </div>
    </>
  );
}
