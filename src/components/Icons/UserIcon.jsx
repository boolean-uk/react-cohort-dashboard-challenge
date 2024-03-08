import React from 'react'
import PropTypes from "prop-types"

function UserIcon({image, contactInitials}) {
    // Fallback to contacts initials if user has not uploaded an image
  if(!image || '')
    return (
      <div className='user-icon'>{contactInitials ?? '??'}</div>
    )
    
  return (
    <img 
      src={image}
      alt="Circular Image" 
      className="user-icon"
    />
  )
}

UserIcon.propTypes = { 
	image: PropTypes.string.isRequired,
    contactInitials: PropTypes.string.isRequired,
}

export default UserIcon