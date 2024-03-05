import { useContext, useEffect, useState } from "react";
import * as API from "../../../API/API";

import "./PostCommentList.css";
import { PostContext } from "../PostItem";
import PostComment from "./PostComment/PostComment";
function PostCommentList() {
  // eslint-disable-next-line no-unused-vars
  const [filterComments, setFilterComments] = useState(true);
  const { comments } = useContext(PostContext);

  const toggleFilterComments = () => setFilterComments(!filterComments);

  let commentsToRender = comments;
  if (filterComments) {
    commentsToRender = commentsToRender.slice(-3);
  }

  return (
    <>
      <div>
        <button className="mx-5" onClick={toggleFilterComments}>
          {filterComments ? "Show more" : "Show less"}
        </button>
        {commentsToRender.map((comment, indx) => (
          <PostComment key={indx} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default PostCommentList;
