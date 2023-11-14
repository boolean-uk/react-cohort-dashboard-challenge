import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
const Home = () => {
  return ( 
  <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />

    </div>

  
  </>
  
  );
}
 
export default Home;