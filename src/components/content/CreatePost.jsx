import { useContext, useState } from "react";

import Button from "../ui/Button";
import Avatar from "../Avatar";
import Box from "../containers/Box";
import Input from "../ui/Input";
import { getInitialsFromUser } from "../../util/misc";
import { PostsUrlBase } from "../../util/api";
import { CurrentUserContext, PostsContext } from "../Contexts";

function CreatePost() {
  const { currentUser } = useContext(CurrentUserContext);
  const { updatePosts } = useContext(PostsContext);
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let post = {
      title: "",
      contactId: currentUser.id,
      content: content,
    };
    fetch(PostsUrlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create post.");
        }
        return res.json();
      })
      .then(() => {
        setContent("");
        updatePosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input
        placeholder={"What's on your mind?"}
        onChange={handleChange}
        value={content}
      />
      <Button onClick={handleSubmit}>Post</Button>
    </Box>
  );
}

export default CreatePost;
