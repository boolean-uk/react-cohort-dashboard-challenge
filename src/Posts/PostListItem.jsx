import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CommentList from "../Comments/CommentList";

function PostListItem(props) {
  const { post, contacts } = props
  const postId = post.id;
  const postAuthor = contacts.find((contact) => 
  contact.id === post.contactId);

  //get initials of postAuthor
  const postAuthorInitials = postAuthor.firstName[0] + postAuthor.lastName[0];
  const [comments, setComments] = useState([]);
  
  //URL to fetch comments for post
  const GET_COMMENTS = "https://boolean-api-server.fly.dev/guro18/post/" 
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

  return (
    <div className="post-item-wrapper">
      <li className="post-list-item">
      <div className="initials-circle">{postAuthorInitials}</div>
        <h3>
          {postAuthor.firstName} {postAuthor.lastName}
        </h3>
        <h3>
          {post.title}
        </h3>
        <h4>
          {post.content}
        </h4>
        <h4>
            <CommentList 
            comments={comments} 
            contacts={contacts} 
            onAddComment = {handleAddComments} 
            postId={postId}
            />
        </h4>
        <Link to={`/view-post/${postId}`} className="view-post-link">View Post</Link>
      </li>
    </div>
  )
}

export default PostListItem