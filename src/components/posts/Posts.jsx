import { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import { AppDataContext } from '../../App'



function Posts() {
  const context = useContext(AppDataContext)

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/RobinKaastrup/post')
    .then(res => res.json())
    .then(context.setPosts)
  }, [])

  let content = context.posts.map(post => <Post post={post} key={post.id}/>).reverse()

  return (
  <>
    {content}
  </>
  )

}

export default Posts