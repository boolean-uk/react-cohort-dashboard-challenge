import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CommentList from "../Comments/CommentList";
import ProfileCircle from "../components/ProfileCircle";
import "../styles/PostListItem.css"
import { ContactContext } from "../App";

export default function PostListItem(props) {
  const { post, contacts } = props
  const postId = post.id;
  const author = contacts.find((contact) => 
  contact.id === post.contactId);

  const authorInitials = author.firstName[0] + author.lastName[0];
  const [comments, setComments] = useState([]);
  const [displayedComments, SetDisplayedComments] = useState(3);
 
  const GET_COMMENTS = "https://boolean-api-server.fly.dev/OnealLane/post/" 
  + postId.toString()
  + "/comment";

    //fetch comments
    useEffect(() => {
        fetch(GET_COMMENTS)
        .then((response) => response.json())
        .then((responseData) => {
          setComments(responseData)
        });
      }, []);

      //update state of comments
      const handleAddComments = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
      };

      const handleExpandComments = () => {
        SetDisplayedComments(comments.length)
      }

      const handleMinimizeComments = () => {
        SetDisplayedComments(3)
      }

  return (
    <div className="postListItem-wrapper">
      <li className="postListItem">
      <ProfileCircle name={authorInitials}  colour={author.favouriteColour} id={author.id}/>
        <h3>
          {author.firstName} {author.lastName}
        </h3>
        <h3>
          {post.title}
        </h3>
        <h4>
          {post.content}
        </h4>
        <h4>
            <CommentList 
            comments={comments.slice(0, displayedComments)} 
            contacts={contacts} 
            onAddComment = {handleAddComments} 
            postId={postId}
            />
            {comments.length > 3 && displayedComments < comments.length && (
              <button onClick={handleExpandComments}>Show All Comments</button>
            )}
             {comments.length > 3 && displayedComments === comments.length && (
              <button onClick={handleMinimizeComments}>Minimize Comments</button>
            )}
        </h4>
        <Link to={`/view-post/${postId}`} className="view-post-link">View Post</Link>
      </li>
    </div>
  )
}
