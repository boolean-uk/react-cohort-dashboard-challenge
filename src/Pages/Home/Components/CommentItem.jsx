import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'
import ProfilePicture from '../../../globalComponents/profilePicture'


function CommentItem({comment}) {
  const [author, setAuthor] = useState(undefined)
  const {users,setUsers} = useContext(UsersContext)

  useEffect(() => { setAuthor(users.find((user) => user.id === comment.contactId)) }, [users])

  if (author === undefined) { return <a>loading...</a> }

  return (
    <div>
      <ProfilePicture firstName={author.firstName} lastName={author.lastName} favouriteColour={author.favouriteColour} />
      <div>{author.firstName} {author.lastName}</div>
      <div>{comment.content}</div>
    </div>
  )
}

export default CommentItem