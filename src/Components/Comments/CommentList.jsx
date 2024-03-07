import { useContext, useEffect, useState } from "react";

import { TempContext } from "./../../App";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";

function CommentList({ id, hide }) {
  const [comments, setComments] = useState([]);
  const [amount, setAmount] = useState(3);
  const URL = `https://boolean-api-server.fly.dev/Slingreen/post/${id}/comment`;

  function getComments() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setComments(data));
    // .then((data) => console.log(data));
  }
  let filteredComments;
  hide
    ? (filteredComments = comments.slice(0, amount))
    : (filteredComments = comments);

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [id]);

  return (
    <div>
      {`${hide ? "" : ""}`}
      {hide && (
        <p
          className="comment-text"
          onClick={() => {
            amount === 3 ? setAmount(comments.length) : setAmount(3);
          }}
        >
          See {` ${amount === 3 ? "previous" : "less"}`} comments
        </p>
      )}
      <ul>
        {filteredComments.map((post, index) => (
          <CommentItem key={index} keydata={index} post={post} />
        ))}
      </ul>
      <CreateComment />
    </div>
  );
}

export default CommentList;
