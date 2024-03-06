import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../App'
import ProfilePicture from '../../../globalComponents/profilePicture'
import CommentItem from './CommentItem'


function PostItem({ post }) {
  const [author, setAuthor] = useState(undefined)
  const URL = `https://boolean-api-server.fly.dev/thegrevling/post/${post.id}/comment`
  const [comments, setComments] = useState([])
  const users = useContext(UsersContext)

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setComments)
  }, [])

  useEffect(() => { setAuthor(users.find((user) => user.id === post.contactId)) }, [users])

  if (author === undefined) { return <a>loading...</a> }

  return (
    <div className='post-container'>
      <ProfilePicture firstName={author.firstName} lastName={author.lastName} favouriteColour={author.favouriteColour} />
      <div>{post.title}</div>
      <div>{author.firstName}</div>
      {comments && comments.map((comment, index) => <CommentItem comment={comment} key={index} />)}
    </div>
  )
}

export default PostItem