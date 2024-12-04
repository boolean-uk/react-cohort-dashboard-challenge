import { useContext, useEffect, useState } from 'react'
import { PostsContext } from './Dashboard'
import { useParams } from 'react-router-dom'
import PostItem from './PostItem'

function PostView() {
  const { id } = useParams()
  const { posts, fetchPosts } = useContext(PostsContext)
  const [post, setPost] = useState(undefined)
  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(id));
    setPost(selectedPost);
  }, [id, posts]);

  if (!posts || !post) return <p>Loading the post...</p>;
  return (
    <PostItem post={post} />
  )
}

export default PostView