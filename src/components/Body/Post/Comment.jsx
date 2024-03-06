/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../Body.css";
export default function Comment({ comment }) {
  // Here I need to fetch contacts and instead of printing contactId I need to print their name
  // const [commenter, setCommenter] = useState({});
  // useEffect(() => {
  //   fetch(`https://boolean-api-server.fly.dev/VictorAdamson/contact/`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((jsonData) => {
  //       setCommenter(jsonData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="comment-box">
        {comment.contactId}: {comment.content}
      </div>
    </>
  );
}
