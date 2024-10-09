import { Stack } from "@mui/material";
import Comment from "./Comment";

function CommentsList({comments}){

    /*if(comments.length > 3) {
        const shortList = comments.slice(0,2)
    }*/
    
    return(
        <Stack spacing={1}>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment}></Comment>
        ))}
      </Stack>
    );
}

export default CommentsList