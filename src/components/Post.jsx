import React from 'react'

export default function Post( { post } ) {
  const { title, content } = post

  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
