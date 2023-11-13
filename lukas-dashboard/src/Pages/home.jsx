/* eslint-disable react/prop-types */
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import LeftMenu from '../components/Left-menu/left-menu'


function Home({users, posts}) {
  
    return (
        <div className='main-app-grid'>
          <Header />
          <LeftMenu />
          <Main users={users} posts={posts} />
        </div>
        
    )
  }
  
  export default Home
  