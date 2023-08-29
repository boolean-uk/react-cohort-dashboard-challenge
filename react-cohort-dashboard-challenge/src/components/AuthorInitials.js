import React, { useState, useEffect } from 'react'

function AuthorInitials({ name, id }) {
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    if (typeof id === 'number' && !isNaN(id)) {
      const colorValue = (id * 1234567) % 16777215; // 1234567 is an arbitrary number for variety
      const randomHex = colorValue.toString(16).padStart(6, '0');
      setBackgroundColor("#" + randomHex);
    }
  }, [id])

  const getInitials = (inputName) => {
    if (!inputName || inputName.trim() === '') return 'DV'; // Default value

    const splitName = inputName.split(' ')
    if (splitName.length === 1) return splitName[0][0];

    return splitName[0][0] + splitName[splitName.length - 1][0]
  };

  return (
    <div className="author-initials-circle" style={{ backgroundColor }}>
      {getInitials(name)}
    </div>
  )
}

export default AuthorInitials;