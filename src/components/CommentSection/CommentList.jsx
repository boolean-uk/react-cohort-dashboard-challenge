import { CommentContext } from "../PostFeed/Post";
import { useContext, useState } from "react";
import CommentSection from "./CommentSection";

function CommentList() {
  const {getInitials, commentsWithContacts } = useContext(CommentContext);
  const [showAllComments, setShowAllComments] = useState(false);

   const handleToggleComments = () => {
    setShowAllComments((prevShowAll) => !prevShowAll);
  };

  return (
    <>
      <h5>Comments:</h5>
      {commentsWithContacts.length > 0 ? (
        <div style={styles.commentsContainer}>
           {commentsWithContacts.length > 3 && (
        <button onClick={handleToggleComments} style={styles.toggleButton}>
          {showAllComments ? 'Hide comments' : 'See previous comments'}
        </button>
      )}
          {showAllComments
            ? commentsWithContacts.map((comment) => (
                <CommentSection
                  key={comment.id}
                  comment={comment}
                  getInitials={getInitials}
                />
              ))
            : commentsWithContacts.slice(0, 3).map((comment) => (
                <CommentSection
                  key={comment.id}
                  comment={comment}
                  getInitials={getInitials}
                />
              ))}
        </div>
      ) : (
        <p>No comments yet.</p>
      )}
     
    </>
  );
}


const styles = {
    commentsContainer: {
      marginBottom: '20px',
    },
    toggleButton: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

export default CommentList;
