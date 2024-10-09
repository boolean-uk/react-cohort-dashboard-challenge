import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import CommentsList from "./CommentsList";

function Post({ post }) {
  const context = useContext(AppContext);
  const initialComment = {
    postId: "",
    content: "",
    contactId: "",
  };

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(initialComment);

  const postAuthor = context.contacts?.find((x) => x.id == post.contactId);
  const randomLoggedIn = context.contacts?.find((y) => y.id == 1);

  const authorInitials =
    postAuthor?.firstName.charAt(0) + postAuthor?.lastName.charAt(0);

  const loggedInInitials =
    randomLoggedIn?.firstName.charAt(0) + randomLoggedIn?.lastName.charAt(0);

  const fetchComments = async () => {
    const commentsResponse = await fetch(
      `${context.postUrl}/${post.id}/comment`
    );
    const jsonCommentData = await commentsResponse.json();
    setComments(jsonCommentData);
  };

  useEffect(() => {
    fetchComments();
  }, [comments]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
    console.log(comment);
  };

  const handleNewComment = async (event) => {
    event.preventDefault();
    const newComment = {
      postId: post.id,
      content: comment.content,
      contactId: randomLoggedIn.id,
    };

    const response = await fetch(`${context.postUrl}/${post.id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    console.log("newComment Response", response);

    //await context.fetchComments();

    setComment(initialComment);
  };

  return (
    <Paper sx={{ p: 2, backgroundColor: "white" }}>
      <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
        <Avatar
          sx={{
            backgroundColor: postAuthor?.favouriteColour,
            color: "#000046",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {authorInitials}
        </Avatar>
        <Typography
          className="font-colour"
          noWrap
          variant="h6"
          gutterBottom
          fontWeight={600}
          textAlign={"left"}
        >
          {postAuthor.firstName} {postAuthor.lastName}
          <Typography sx={{ display: "block" }} variant="subtitle1">
            <Link
              to={`/post/${post.id}`}
              className="post-title-colour"
              sx={{ display: "block", fontWeight: 600 }}
            >
              {post.title}
            </Link>
          </Typography>
        </Typography>
      </Stack>

      <Stack>
        <Typography
          className="font-colour"
          variant="body2"
          sx={{
            fontWeight: 600,
            textAlign: "left",
            paddingTop: 2,
            paddingBottom: 2,
          }}
          gutterBottom
        >
          {post.content}
        </Typography>
      </Stack>

      <Divider />
      <CommentsList comments={comments} />
      <Box sx={{ paddingTop: 2 }}>
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
            placeholder={"Add a comment..."}
            onChange={handleChange}
            fullWidth
          ></TextField>
          <IconButton color="#64648c" onClick={handleNewComment}>
            <SendIcon color="#64648c" />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Post;
