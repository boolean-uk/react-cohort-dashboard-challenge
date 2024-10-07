import { CommentContext } from "../PostFeed/Post";
import { useContext, useState } from "react";
import { MyContext } from "../../ApiProvider";
import { PostsContext } from "../PostFeed/PostFeed";

function CommentForm() {
  const [commentContent, setCommentContent] = useState("");
  const { post, setCommentsWithContacts } = useContext(CommentContext);
  const { addComment, contact } = useContext(MyContext);
  const {getInitials} = useContext(PostsContext)

  const handleChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    if (commentContent.trim()) {

    const newComment = { postId: post.id, content: commentContent, contactId: contact.id };
    try {

        const createdComment = await addComment(post.id, newComment);
        
        const commentWithContact = { ...createdComment, contact };

        setCommentsWithContacts((prevComments) => [
            ...prevComments,
            commentWithContact , 
        ]);

        setCommentContent("");
    } catch (error) {
        console.error("Error adding comment:", error);
    }
}
};

return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.initialsCircle}>
        {getInitials(contact.firstName, contact.lastName)}
      </div>
        <textarea
            value={commentContent}
            onChange={handleChange}
            placeholder="Add a comment..."
            style={styles.textarea}
            required
        />
        <button type="submit" style={styles.button}>Submit Comment</button>
    </form>
);
}

const styles = {
    formContainer: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "1000px",
        margin: "20px auto",
    },
    textarea: {
        width: "100%",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        padding: "10px",
        fontSize: "16px",
        resize: "none",
        outline: "none",
        transition: "border-color 0.3s ease",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
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

export default CommentForm;
