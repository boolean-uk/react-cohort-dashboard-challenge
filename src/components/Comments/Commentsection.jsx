/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import Composecomments from "./Composecomments/Composecomments.jsx"
import Commentitem from "../Comments/Commentitem.jsx";

export default function CommentSection({ post, API_BASE_URL }) {
  const [comments, setComments] = useState([]);
  const [shouldReloadComments, setShouldReloadComments] = useState(false);

  useEffect(() => {
    const fetchPostComments = async () => {
      const response = await fetch(`
        ${API_BASE_URL}/Elizabethcodes44/post/${post.id}/comment`
      );

      if (response.ok) {
        const data = await response.json();
        setComments(data);
        setShouldReloadComments(false);
      } else {
        console.error("Error fetching post comments:", response.statusText);
      }
    };

    fetchPostComments();
  }, [API_BASE_URL, post.id, shouldReloadComments]);

  return (
    <div className="postcommentscontainer">
      <ul className="post__comments">
        {comments.map((comment, index) => (
          <Commentitem
            key={index}
            commentData={comment}
            API_BASE_URL={API_BASE_URL}
          />
        ))}
      </ul>
      <Composecomments
        postId={post.id}
        setShouldReloadComments={setShouldReloadComments}
        API_BASE_URL={API_BASE_URL}
      />
    </div>
  );
}