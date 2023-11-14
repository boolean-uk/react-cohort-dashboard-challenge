import AddNewComment from "./AddNewComment";
import PostComment from "./PostComment";

function Comments({loggedInUserInitials}) {
  return (
    <div className="comments">
      <PostComment></PostComment>
      <AddNewComment loggedInUserInitials={loggedInUserInitials}> </AddNewComment>
    </div>
  );
}

export default Comments;
