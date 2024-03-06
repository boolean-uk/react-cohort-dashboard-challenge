import CreateComment from "./CreateComment"
import CommentList from "./CommentList"
import PostContent from "./PostContent"

function PostItem() {
  return (
    <div>
        <PostContent></PostContent>
        <CommentList></CommentList>
        <CreateComment></CreateComment>
    </div>
  )
}

export default PostItem