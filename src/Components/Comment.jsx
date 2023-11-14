import { useEffect, useState } from "react";

function Comment({ comment }) {
  const [contact, setContact] = useState({});

  // 3. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://boolean-api-server.fly.dev/ps975076/contact/${comment.contactId}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "data");
        setContact(data);
      });
  };

  return (
    <div className="some-comment">
      <div className="initialsForLotsComments"></div>
      <p>
        <strong>
          {contact?.firstName || "First"} {contact?.lastName || "Last"}
        </strong>
      </p>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;
