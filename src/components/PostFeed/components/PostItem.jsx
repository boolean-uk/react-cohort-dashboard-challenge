import CreateComment from "./CreateComment"
import CommentList from "./CommentList"
import PostContent from "./PostContent"

function PostItem({post}) {
  return (
    <div>
        <PostContent post={post}></PostContent>
        <CommentList></CommentList>
        <CreateComment></CreateComment>
    </div>
  )
}

export default PostItem