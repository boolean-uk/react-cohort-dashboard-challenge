import React from 'react'
import UserIcon from '../Icons/UserIcon'
import CommentSection from './CommentSection'
import PropTypes from "prop-types"
import CommentBar from './CommentBar'

function Post({ data, contact }) {
  return ( 
    <div className='post'>
      <div className='post-content'>
        <div className='post-head'>
          <UserIcon image={contact.profileImage} contactInitials={(contact.firstName.at(0) + contact.lastName.at(0)).toUpperCase()}/>
          <div className='info'>
            <div className='username'>{contact.firstName + ' ' + contact.lastName}</div>
            <div className='post-title'>{data.title}</div>
          </div>
        </div>
        <div className='post-body'>
          {data.content}
        </div>
        <div className='comment-container'>
          <CommentSection postId={data.id}/>
          <CommentBar />
        </div>
      </div>
    </div>
  )
}

Post.propTypes = { 
	data: PropTypes.object.isRequired, 
    contact: PropTypes.object.isRequired,
}
export default Post