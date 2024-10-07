import { PostsContext } from "../PostFeed/PostFeed";
import { useContext } from "react";
import { MyContext } from "../../ApiProvider";
function CommentSection({ comment }) {

  const {getInitials} = useContext(PostsContext)


  return (
    <div style={styles.commentBox}>
      <div style={styles.initialsCircle}>
        {getInitials(comment.contact.firstName, comment.contact.lastName)}
      </div>
      <div>
        <p>
          <strong>
            {comment.contact.firstName} {comment.contact.lastName}
          </strong>
        </p>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}
const styles = {
  commentBox: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F0F5FA",
  },
  initialsCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "green",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontWeight: "bold",
  },
};

export default CommentSection;
