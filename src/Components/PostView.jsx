import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import { Stack } from "@mui/material";

function PostView(){
    const context = useContext(AppContext)
    const { id } = useParams();
    const thisPost = context.posts?.find( (x) =>  x.id == id)

    return(
        <Stack>
            <Post post={thisPost}></Post>
        </Stack>
    );
}

export default PostView