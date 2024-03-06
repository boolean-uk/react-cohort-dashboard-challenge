import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'

function PostItem({ post }) {
  const [author, setAuthor] = useState(undefined)
  const users = useContext(UsersContext)

  useEffect(() => { setAuthor(users.find((user) => user.id === post.contactId)) }, [users])



  if (author === undefined) { return <a>loading...</a> }

  return (
    <div className='post-container'>
      <div>{post.title}</div>
      <div>{author.firstName}</div>
    </div>
  )
}

export default PostItem