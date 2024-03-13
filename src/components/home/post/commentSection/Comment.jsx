// Comment.jsx
import '/src/styles/home/post/commentSection/Comment.css'

import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import { ProfileImage } from "../../../ProfileImage"
import { getUser } from "../../../../utils/userRequests"
import { UserName } from '../../../UserName';

export const Comment = ({comment}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
      getUser(comment.contactId)
          .then(data => {setUser(data)})
  })

  return (
    <div className="comment-container">
      <div className="comment-profile-image">
        <ProfileImage user={user} />
      </div>
      
      <div className="comment-body">
        <UserName user={user}/>
        <p className='comment-content'>{comment.content}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
      id: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired,
      contactId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
  }).isRequired,
};