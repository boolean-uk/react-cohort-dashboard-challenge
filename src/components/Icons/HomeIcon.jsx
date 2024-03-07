import React from 'react'
import PropTypes from "prop-types"

function HomeIcon({active}) {
  let buttonActive = active ? '#000046' : '#64648C'

  return (
    <svg width="32" height="32" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 36V12L16.6 0L32.5 12V36H20.8V21.75H12.15V36H0.5Z" fill={buttonActive} />
    </svg>
  )
}

HomeIcon.propTypes = { 
	active: PropTypes.bool,
}

export default HomeIcon