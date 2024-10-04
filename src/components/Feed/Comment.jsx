/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import "../Feed/Comment.css";
import { PostContext } from "../../App";
import { Link } from "react-router-dom";
import { DeleteComment } from "../../PostAPIs/PostAPI";

export default function Comment({comment, postid, setShouldFetchComments}) {
    const { authors, username, loggedInUser } = useContext(PostContext);
    const [isAuthor, setIsAuthor] = useState(false);

    const author = authors.find((a) => a.id === comment.contactId);

    
    const handleDeleteComment = async () => {
        try {
            await DeleteComment(username, postid);
            setShouldFetchComments(true);
        } catch (error) {
          console.error("Error in deleting a post: " + error);
        }
      }

      useEffect(() => {
        if (loggedInUser.id === comment.contactId) {
          setIsAuthor(true);
        } else {
          setIsAuthor(false);
        }
      }, [loggedInUser.id, comment.contactId]);

    return (
        <div className="comment-item">
            <Link to={`/profile/${author.id}`}>
            <div className="comment-profile-image" style={{backgroundColor: author.favouriteColour}}>
              <p className="initials5">{author.firstName.charAt(0)}{author.lastName.charAt(0)}</p>
            </div>
            </Link>
            <div className="text-container">
                <p className="comment-author">{author.firstName} {author.lastName}</p>
                <p className="comment-text">{comment.content}</p>
                </div>
                {isAuthor ? (<button className="delete-comment-button" onClick={handleDeleteComment}>Delete Comment</button>) : ("")}
        </div>
    );
}