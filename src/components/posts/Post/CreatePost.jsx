import ProfileIcon from "../../profileIcon/ProfileIcon";
import "../style.scss";
import InputField from "../../inputFields/InputFields";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PostContext, UserContext } from "../../../App";

export default function CreatePost({ currentUser }) {
  const postContext = useContext(PostContext);
  const userContext = useContext(UserContext)
  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {
    console.log(currentUser);
    e.preventDefault();
    const newPost = {
      title: "My own posts",
      content: input,
      contactId: currentUser.contactId,
    };

    await fetch("https://boolean-uk-api-server.fly.dev/valen98/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside create " + postContext.posts)
        postContext.setPosts([...postContext.posts, data]);
        console.log(postContext.posts);
      });
  };

  return (
    <div className="createPostParent">
      <div className="createPost">
        <div className="profileIconDiv">
          <ProfileIcon
            letters={currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0)}
            setFavouriteColour={currentUser.favouriteColour}
            id={16}
          />
        </div>
        <div className="actionDiv">
          <form onSubmit={handleSubmit} className="createPostForm">
            <InputField
              label="createPost"
              id="createPost"
              name="createPost"
              placeholder="What's on your mind?"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              className="createButton"
              onClick={handleSubmit}
              variant="contained"
            >
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
