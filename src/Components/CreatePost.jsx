import { useContext, useState } from "react";
import { AppContext } from "../App";
import { Avatar, TextField, Stack, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const context = useContext(AppContext);
  const initialpostData = {
    title: "",
    content: "",
  };
  const navigate = useNavigate();
  const [postData, setPostData] = useState(initialpostData);

  const randomLoggedIn = context.contacts?.find((y) => y.id == 1);
  const loggedInInitials =
    randomLoggedIn?.firstName.charAt(0) + randomLoggedIn?.lastName.charAt(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title: postData.title,
      content: postData.content,
      contactId: randomLoggedIn.id,
    };

    console.log(newPost);

    const response = await fetch(context.postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    console.log("newPost Response", response);

    await context.fetchPosts();

    setPostData(initialpostData);

    navigate(`/post/${post.id}`)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  return (
    <Paper sx={{ p: 2, backgroundColor: "white" }}>
      <Stack
        className="input-title"
        sx={{ alignItems: "left", paddingBottom: 1 }}
      >
        <TextField
          className="form-background-colour"
          name="title"
          placeholder={"Title"}
          onChange={handleChange}
        ></TextField>
      </Stack>
      <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
        <Avatar
          sx={{
            backgroundColor: "#64dc78",
            color: "#000046",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {loggedInInitials}
        </Avatar>
        <TextField
          name="content"
          className="form-background-colour"
          placeholder={"Whats on your mind"}
          onChange={handleChange}
          fullWidth
        ></TextField>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#000046" }}
        >
          Post
        </Button>
      </Stack>
    </Paper>
  );
}

export default CreatePost;
