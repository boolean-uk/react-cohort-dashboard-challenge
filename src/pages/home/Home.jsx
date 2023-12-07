import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Share from '../../components/share/Share'


import "./home.css"
const Home = () => {
  return ( 
  <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Share />
      
    

    </div>

  
  </>
  
  );
}
 
export default Home;