import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Post from '../../components/Post'
import Share from '../../components/share/Share'


import "./home.css"
const Home = ({posts}) => {
  return ( 
  <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Share />
    
      <Post posts={posts}/>
    
      
    

    </div>

  
  </>
  
  );
}
 
export default Home;