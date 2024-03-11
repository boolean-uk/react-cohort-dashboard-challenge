import PostItem from '../components/postview/PostItem'
import { useLocation } from 'react-router-dom'



function PostView() {
  const location = useLocation()
  const { post} = location.state
  // const [ accounts, setAccount] = useState(_accounts)
  return (
    <div className='postview'>
       <PostItem post={post} />
    </div>
  )
}

export default PostView
 