import React, { useEffect, useState } from 'react'
import UserIcon from '../Icons/UserIcon'
import CommentSection from './CommentSection'
import PropTypes from "prop-types"
import CommentBar from './CommentBar'
import fetchData from '../../service/FetchData'

function Post({ data, contact }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
      fetchData(`https://boolean-api-server.fly.dev/KonWritesCode/post/${data.id}/comment`, setComments)
      }, [data] )

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
          <CommentSection comments={comments} setComments={setComments} postId={data?.id}/>
          <CommentBar setComments={setComments} postId={data?.id}/>
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