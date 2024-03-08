import '/src/styles/home/post/Post.css'

import { useEffect, useState } from 'react';
import { CommentSecton } from './commentSection/CommentSection';
import { ProfileImage } from '/src/components/ProfileImage.jsx'
import PropTypes from 'prop-types'
import { getUser } from '../../../utils/userRequests';
import { Link } from 'react-router-dom';
import { UserName } from '../../UserName';

export const Post = ({post}) => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    getUser(post.contactId).then((data) => {
      setUser(data);
    });
  }, [post.contactId]);

  return (
      <div className="feed-container">
        <div className="post-header">
          <div>
            <ProfileImage user={user} />
          </div>
          <div className="post-right-of-profile">
            <UserName user={user}/>
            <Link to={`/post/${post.id}`}>
              <div className="post-title">
                <p>{post.title}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <hr className="post-divider-line" />
        </div>
        <CommentSecton postId={post.id} />
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