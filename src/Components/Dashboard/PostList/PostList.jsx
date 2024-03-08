import { ContactContext, PostContext } from '../Dashboard'
import PostListItem from '../PostListItem/PostListItem'
import { useContext} from 'react'
import "./PostList.css"
import NewPostForm from '../NewPostForm/NewPostForm'

function PostList() {
  const { posts } = useContext(PostContext)
  const { contacts } = useContext(ContactContext)

  return (
    <div className='posts'>
    {contacts && 
      <NewPostForm />}
    <div className='post-cards'>
        {posts.map((post, i) => (
            <PostListItem key={i} post={post} />
        ))}
    </div>
    </div>
  )
}

export default PostList
