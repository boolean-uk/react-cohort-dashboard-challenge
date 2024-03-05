import { Avatar, TextInput, ActionIcon, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { userState, isLoggedInState } from "../../../State/auth.state";
import { useAtom } from "jotai";
import { createComment } from "../../../Helpers/APIManager";
import PropTypes from "prop-types";
import { useState } from "react";

export function AddComment({ postId, comments, setComments }) {
  const [user, setUser] = useAtom(userState);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInState);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async (event) => {
    event.preventDefault();

    if (commentText.trim() === "") {
      return;
    }

    try {
      const comment = {
        postId: postId,
        content: commentText,
        contactId: user.id,
      };

      const data = await createComment(comment, postId);
      setComments(comments.concat(data));
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return isLoggedIn ? (
    <form onSubmit={handleAddComment}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Post Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rightSectionWidth={42}
        leftSection={<Avatar src={user.profileImage} alt="Profile Image" />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" type="submit">
            <IconArrowRight
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        }
      />
    </form>
  ) : null;
}

AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
};
