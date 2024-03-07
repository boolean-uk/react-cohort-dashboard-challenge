import { useEffect, useState } from 'react';
import { CommentSecton } from './commentSection/CommentSection';
import { ProfileImage } from '../../ProfileImage'
import '/src/styles/Feed/post/Post.css'
import { getUser } from '../../../utils/userRequests';
import PropTypes from 'prop-types'

export const Post = ({post}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(post.contactId).then((data) => {
      setUser(data);
    });
  }, []);

  if (!user) {
    return (
      <div className="post-container">
        <p>User not found</p>
      </div>
    );
  }
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-header">
          <ProfileImage user={user} />
          <div className="post-right-of-profile">
            <div className="post-user-name">
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="post-title">
              <p>{post.title}</p>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <hr className='post-divider-line'/>
        </div>
        <CommentSecton postId={post.id} />
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};