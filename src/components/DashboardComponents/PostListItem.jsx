import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import PostHeader from "./PostComponents/PostHeader";
import PostContent from "./PostComponents/PostContent";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

export default function PostListItem({ post }) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // Get comments
    fetch(
      "https:boolean-api-server.fly.dev/pkekkonen/post/" + post.id + "/comment"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, [post.id]);
  
  return (
    <div className="post-container">
      <span className="post-child post-header">
        <PostHeader post={post} />
      </span>
      <span className="post-child post-content">
        <PostContent post={post} />
      </span>
      <hr></hr>
      <span className="post-child post-commentlist">
        {comments && <CommentList post={post} comments={comments} />}
      </span>
      <span className="post-child post-create-comment">
        <CreateComment
          post={post}
          setComments={setComments}
          comments={comments}
        />
      </span>
    </div>
  );
}
