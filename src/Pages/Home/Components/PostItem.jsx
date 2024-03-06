import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'
import ProfilePicture from '../../../globalComponents/profilePicture'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'


function PostItem({ post }) {
  const [author, setAuthor] = useState(undefined)
 
  const users = useContext(UsersContext)

  useEffect(() => {
    // Check if post is defined before attempting to find the author
    if (post) {
      setAuthor(users.find((user) => user.id === post.contactId));
    }
  }, [users, post]);

  if (author === undefined) { return <a>loading...</a> }

  return (
    <div className='post-container'>
      <ProfilePicture firstName={author.firstName} lastName={author.lastName} favouriteColour={author.favouriteColour} />
      <div>{author.firstName} {author.lastName}</div>
      <Link to={`/post/${post.id}`} >
      <div>{post.title}</div>
      </Link>
      <div>{post.content}</div>
      <CommentList postId={post.id} />
    </div>
  )
}

export default PostItem