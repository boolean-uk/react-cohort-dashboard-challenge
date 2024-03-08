import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavTop from "../../../../Nav-Top";
import NavLeft from "../../../../Nav-Left";
import { UserContext } from "../../../../App";
import CommentList from "../CommentList";
import CreateComment from "../CommentList/Comment/CreateComment";

function ViewPost() {
  const { postId } = useParams();
  const { users } = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/espensolhaug1/post/${postId}`
        );
        const postData = await response.json();
        setPost(postData);
        const foundUser = users.find((u) => u.id === postData.contactId);
        setUser(foundUser);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, [postId, users]);

  useEffect(() => {
    async function fetchComments() {
      if (post) {
        try {
          const response = await fetch(
            `https://boolean-api-server.fly.dev/espensolhaug1/post/${post.id}/comment`
          );
          const apiJson = await response.json();
          setComments(apiJson);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      }
    }

    fetchComments();
  }, [post]);

  if (!post || !user) {
    return <div>Waiting for post and user data...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavTop />
      <div>
        <NavLeft />
        <div className="mainContent">
          <div className="post">
            <div className="userinfo">
              {user && (
                <p
                  className="initials"
                  style={{
                    backgroundColor: user.favouriteColour,
                  }}
                >
                  {user.firstName[0]}
                  {user.lastName[0]}
                </p>
              )}
              <div>
                {user && (
                  <>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="postTitle">{post.title}</p>
                  </>
                )}
              </div>
            </div>
            <p className="postContent">{post.content}</p>
            <div className="comments">
              {comments && <CommentList comments={comments} />}
            </div>
            <CreateComment
              post={post}
              setComments={setComments}
              comments={comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
