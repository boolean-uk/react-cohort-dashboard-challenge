import { useState, createContext} from "react"
import PostItem from '../components/postview/PostItem'
import { useLocation } from 'react-router-dom'

const AccountContext = createContext();

function PostView() {
  const location = useLocation()
  const { post, _accounts } = location.state
  const [ accounts, setAccount] = useState(_accounts)
  return (
    <div>
       <AccountContext.Provider value={{ accounts, setAccount }}>
        <PostItem post={post} />
      </AccountContext.Provider>
    </div>
  )
}

export default PostView
