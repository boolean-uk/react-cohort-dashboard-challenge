import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'
import ProfilePicture from '../../../globalComponents/profilePicture'
import CommentList from './CommentList'


function PostItem({ post }) {
  const [author, setAuthor] = useState(undefined)
 
  const users = useContext(UsersContext)

  useEffect(() => { setAuthor(users.find((user) => user.id === post.contactId)) }, [users])

  if (author === undefined) { return <a>loading...</a> }

  return (
    <div className='post-container'>
      <ProfilePicture firstName={author.firstName} lastName={author.lastName} favouriteColour={author.favouriteColour} />
      <div>{post.title}</div>
      <div>{author.firstName} {author.lastName}</div>
      <CommentList postId={post.id} />
    </div>
  )
}

export default PostItem