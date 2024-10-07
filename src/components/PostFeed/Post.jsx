import { useEffect, useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import CommentList from "../CommentSection/CommentList";
import { PostsContext } from "./PostFeed";
import CommentForm from "../CommentSection/CommentForm";
const CommentContext = createContext();

function Post({ post }) {
  const [commentsWithContacts, setCommentsWithContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {getInitials} = useContext(PostsContext)

  const fetchCommentsWithContacts = async () => {
    try {
      const commentsResponse = await fetch(
        `https://boolean-uk-api-server.fly.dev/sebgro98/post/${post.id}/comment`
      );
      const comments = await commentsResponse.json();

      const contactPromises = comments.map(async (comment) => {
        const contactResponse = await fetch(
          `https://boolean-uk-api-server.fly.dev/sebgro98/contact/${comment.contactId}`
        );
        const contact = await contactResponse.json();
        return { ...comment, contact };
      });

      const commentsWithContacts = await Promise.all(contactPromises);
      setCommentsWithContacts(commentsWithContacts);
    } catch (error) {
      console.error("Error fetching comments or contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchCommentsWithContacts();
  }, [post.id]);

   if (loading) return <div>Loading comments...</div>;

  return (
    <CommentContext.Provider value={{ commentsWithContacts, post, setCommentsWithContacts }}>
      <div key={post.id} style={styles.postbox}>
        <div style={styles.header}>
          <div style={styles.initialsCircle}>
            {getInitials(post.contact.firstName, post.contact.lastName)}
          </div>
          <div>
          <Link to={`/profile/${post.contactId}`}>
            <h3 style={styles.contactName}>
              
              {post.contact.firstName} {post.contact.lastName}
              
            </h3>
            </Link>
            <Link to={`/post/${post.id}`} state={{ post }}>
              <h4 style={styles.postTitle}>{post.title}</h4>
            </Link>
          </div>
        </div>
        <p>{post.content}</p>
        <CommentList />
        <CommentForm/>
      </div>
    </CommentContext.Provider>
  );
}

const styles = {
  postbox: {
    border: "1px solid #ccc",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  contactName: {
    margin: "0 0 5px 10px",
  },
  postTitle: {
    margin: "0",
  },
  commentsContainer: {
    marginTop: "15px",
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
export { Post, CommentContext };
