/* eslint-disable react/prop-types */
import Main from '../components/Main/main'

function Home({users, posts, setPosts}) {
  
    return (
          <Main users={users} posts={posts} setPosts={setPosts}/>
    )
  }
  
  export default Home
  