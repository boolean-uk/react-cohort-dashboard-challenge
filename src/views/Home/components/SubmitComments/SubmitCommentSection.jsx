import React, { useEffect, useState } from "react";
import GenerateComment from "./GenerateComment/GenerateComment";
import SubmitCommentItem from "./SubmitCommentItem";

export default function SubmitCommentSection({ post, API_BASE_URL }) {
  const [commentList, setCommentList] = useState([]);
  const [shouldReloadComments, setShouldReloadComments] = useState(false);

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/Hayor4real/post/${post.id}/comment`
        );
        const data = await response.json();
        setCommentList(data);
        setShouldReloadComments(false);
      } catch (error) {
        console.error("Error fetching post comments:", error);
      }
    };

    fetchPostComments();
  }, [API_BASE_URL, post.id, shouldReloadComments]);

  return (
    <div className="post__comments__container">
      <ul className="post__comments">
        {commentList.map((comment, index) => (
          <SubmitCommentItem
            key={index}
            comment={comment}
            API_BASE_URL={API_BASE_URL}
          />
        ))}
      </ul>
      <GenerateComment
        postId={post.id}
        setShouldReloadComments={setShouldReloadComments}
        API_BASE_URL={API_BASE_URL}
      />
    </div>
  );
}
