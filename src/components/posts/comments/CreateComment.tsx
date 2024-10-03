import React, { useContext, useState } from "react";
import Avatar from "../../common/Avatar";
import { CommentProps, CreateCommentProps } from "../../common/types";
import { mockContact } from "../../common/mock";
import { CommentsContext } from "./Comments";

export default function CreateComment({ postId }: CreateCommentProps) {
  const [comments, setComments] = useContext(CommentsContext);
  const [comment, setComment] = useState("");

  const createComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://boolean-uk-api-server.fly.dev/hermagst/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          contactId: 1,
          content: comment,
        }),
      },
    )
      .then((res) => res.json())
      .then((body: CommentProps) => {
        setComments([...comments, body]);
        setComment("");
      });
  };

  return (
    <div className="flex items-center border-t border-gray-200 pt-4">
      <Avatar imgSrc={mockContact.profileImage} />

      <form className="ml-4 w-full flex" onSubmit={createComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-gray-100 p-2 rounded-lg outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
          value={comment}
        />

        <input
          type="submit"
          className="ml-2 text-blue-500 focus:border-none"
        ></input>
      </form>
    </div>
  );
}
