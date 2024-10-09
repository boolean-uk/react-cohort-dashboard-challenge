import { useContext } from "react";
import { AppContext } from "../App";
import { Stack, Avatar, Box, Typography } from "@mui/material";

function Comment({ comment }) {
  const context = useContext(AppContext);
  const commentAuthor = context.contacts.find((x) => x.id == comment.contactId);

  const commentAuthorInitials =
    commentAuthor.firstName.charAt(0) + commentAuthor.lastName.charAt(0);

  return (
    <Box sx={{ paddingTop:1}}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
        <Avatar
          sx={{
            backgroundColor: commentAuthor.favouriteColour,
            color: "#000046",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {commentAuthorInitials}
        </Avatar>
        <Box sx={{backgroundColor: "#e6ebf5", borderRadius:2, paddingTop:1, paddingLeft:2, paddingRight:3}}>
        <Typography
          className="font-colour"
          noWrap
          variant="subtitle2"
          gutterBottom
          fontWeight={600}
          textAlign={"left"}
        >
          {commentAuthor.firstName} {commentAuthor.lastName}
          <Typography
            className="font-colour"
            variant="body2"
            sx={{
              textAlign: "left",
              display: "block", 
            }}
            gutterBottom
          >
            {comment.content}
          </Typography>
        </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Comment;
