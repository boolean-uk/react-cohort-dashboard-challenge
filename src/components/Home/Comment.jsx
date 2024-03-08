import React, {useContext} from 'react'
import PropTypes from "prop-types"
import UserIcon from '../Icons/UserIcon'
import { DataContext } from '../../App'

function Comment({data}) {
  const dataContext = useContext(DataContext)
  const contact = dataContext.contacts.find(c => c.id === data.contactId)

  return (
    <div className='comment'>
      <UserIcon image={contact?.profileImage} contactInitials={(contact?.firstName.at(0) + contact?.lastName.at(0)).toUpperCase()} />
      <div className='comment-content'>
        <div className='comment-username'>{contact?.firstName + ' ' + contact?.lastName}</div>
        <div className='comment-text'>{data.content}</div>
      </div>
    </div>
  )
}

Comment.propTypes = { 
	data: PropTypes.object.isRequired,
}

export default Comment