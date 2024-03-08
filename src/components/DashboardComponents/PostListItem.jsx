import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import PostHeader from "./PostComponents/PostHeader";
import PostContent from "./PostComponents/PostContent";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

export default function PostListItem({ post }) {
  const user = useContext(DataContext).user;
  const setPosts = useContext(DataContext).setPosts;
  const posts = useContext(DataContext).posts;
  const [comments, setComments] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(null);

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
        <PostHeader
          post={post}
          editing={editing}
          setEditing={setEditing}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
        />
      </span>
      <span className="post-child post-content">
        <PostContent post={post} editing={editing} editedPost={editedPost} setEditedPost={setEditedPost}/>
      </span>
      <hr></hr>
      <span className="post-child post-commentlist">
        {comments && (
          <CommentList
            post={post}
            comments={comments}
            setComments={setComments}
          />
        )}
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
