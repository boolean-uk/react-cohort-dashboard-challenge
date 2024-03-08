import {useState, useContext, useEffect} from 'react'
import { UserContext } from '../../contexts/UserContext';
import ProfilePicturePost from '../profile/ProfilePicturePost';


export default function CreateComment({ post }) {
  const [comment, setComment] = useState('')
  const user  = useContext(UserContext);
  const { id } = post;

  const handleInputChange = (e) => {
    const comment = e.target.value;
    setComment(comment);
    console.log(comment);
  };

  const handleSubmitComment = () => {
    fetch(`https://boolean-api-server.fly.dev/giarreh/post/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: comment,
        postId: id,
        contactId: user.id
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
      setComment('');
    }).catch(error => console.error('Error posting comment:', error));
  }
  // Current user
  const userInitials = user.firstName && user.lastName ? `${user.firstName[0]}${user.lastName[0]}` : '??'
  const userColor = user.favouriteColour ? user.favouriteColour : 'black'

  return (
    <div className='postAddComment'>
      <ProfilePicturePost initials={userInitials} color={userColor} author={user} />
      <input className='postAddCommentInput main-background' placeholder='Add a comment' value={comment} onChange={handleInputChange}/>
      <div className='postButton' onClick={handleSubmitComment}>
        <p>Comment</p>
      </div>
    </div>
  );
}
