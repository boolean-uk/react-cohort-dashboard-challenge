import { useContext, useState } from "react";

import Avatar from "../Avatar";
import Internal from "../containers/Internal";
import SendIcon from "../icons/SendIcon";
import Input from "../ui/Input";
import { getInitialsFromUser } from "../../util/misc";
import { PostsUrlBase } from "../../util/api";
import { CurrentUserContext } from "../Contexts";

function CreateComment({ post, getComments }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [content, setContent] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSend = () => {
    let comment = {
      postId: post.id,
      content: content,
      contactId: currentUser.id,
    };
    fetch(`${PostsUrlBase}/${post.id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create comment for post.");
        }
        return res.json();
      })
      .then(() => {
        setContent("");
        getComments(post);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Internal>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input
        placeholder={"Add a comment..."}
        onChange={handleChange}
        value={content}
      />
      <SendIcon onClick={handleSend} />
    </Internal>
  );
}

export default CreateComment;
