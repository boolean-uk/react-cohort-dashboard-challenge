/* eslint-disable react/prop-types */
import Main from '../components/Main/main'

export default function Home({users, posts, setPosts}) {
  
    return (
          <Main users={users} posts={posts} setPosts={setPosts}/>
    )
  }
  