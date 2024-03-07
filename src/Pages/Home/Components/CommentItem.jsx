import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'
import ProfilePicture from '../../../globalComponents/profilePicture'
import { Link } from 'react-router-dom'


function CommentItem({ comment }) {
  const [author, setAuthor] = useState(undefined)
  const { users, setUsers } = useContext(UsersContext)

  useEffect(() => { setAuthor(users.find((user) => user.id === comment.contactId)) }, [users])

  if (author === undefined) { return <a>loading...</a> }

  return (
    <div>
      <Link to={`/profile/${author.id}`}>
        <ProfilePicture firstName={author.firstName} lastName={author.lastName} favouriteColour={author.favouriteColour} />
        <div>{author.firstName} {author.lastName}</div>
      </Link>
      <div>{comment.content}</div>
    </div>
  )
}

export default CommentItem