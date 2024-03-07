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

  useEffect(() => {
    console.log(author);
  }, [author]);

  // Author of post
  const initials = author.firstName && author.lastName ? `${author.firstName[0]}${author.lastName[0]}` : '??';
  const color = author.favouriteColour ? author.favouriteColour : 'black';

  return (
    <div className='commentContainer'>
      <div className='comment-author'>
        <ProfilePicturePost initials={initials} color={color} author={author} />
        <h3 onClick={() => navigate(`/profile/${author.id}`)}>{author.firstName} {author.lastName}</h3>
      </div>
      <div className='comment'>
        <p>{content}</p>
      </div>
    </div>
  );
}
