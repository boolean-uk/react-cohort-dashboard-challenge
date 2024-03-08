import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import PostBar from "../components/dashboard/PostBar";
import Post from "../components/dashboard/post/Post";
import { PostContextAPIProvider } from "../contextAPI/PostContextAPI";
import '../style/dashboard/dashboard.css'

const Dashboard = () => {

    return(
        <div className="dashboard-container">

            <div className="header">
                <Header />
            </div>
            <div className="leftNavBar">
                    <LeftNavBar />
            </div>
  
        
            <div className="dashboard-content">

                <div className="dashboard-postbar">
                    <PostBar />
                </div>

                <div className="dashboard-post">
                    <Post />
                </div>
            </div>
      
        

                
        </div>
    )
}

export default Dashboard;