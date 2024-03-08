import { useEffect, useState } from 'react';
import ProfilePicturePost from '../profile/ProfilePicturePost';
import { useNavigate } from 'react-router-dom';

export default function CommentsListItem({ comment }) {
  const [author, setAuthor] = useState({});
  const navigate = useNavigate();
  const { contactId, content } = comment;

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${contactId}`)
      .then(response => response.json())
      .then(data => setAuthor(data))
      .catch(error => console.error('Error fetching author:', error));
  }, [contactId]);

  // Author of post
  const initials = author.firstName && author.lastName ? `${author.firstName[0]}${author.lastName[0]}` : '??';
  const color = author.favouriteColour ? author.favouriteColour : 'black';

  return (
    <div className='commentContainer'>
      <div className='comment-author'>
        <ProfilePicturePost initials={initials} color={color} author={author} />
      </div>
      <div className='comment'>
        <div className='commentContent'>
          <div className='commentHeader' onClick={() => navigate(`/profile/${author.id}`)}>
            <h2>{author.firstName} {author.lastName}</h2>
          </div>
          <div className='commentText'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
