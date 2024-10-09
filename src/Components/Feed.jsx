import { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import { Stack } from "@mui/material";
import CreatePost from "./CreatePost";

function Feed() {
  const context = useContext(AppContext);
  const reversePosts = context.posts.toReversed();
  
  return (
    <main>
      <Stack sx={{ p: 2 }}>
        <CreatePost />
      </Stack>
      <Stack spacing={1}>
        {reversePosts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </Stack>
    </main>
  );
}

export default Feed;
