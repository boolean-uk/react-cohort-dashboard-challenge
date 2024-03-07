import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import PostBar from "../components/dashboard/PostBar";
import Post from "../components/dashboard/post/Post";
import { HttpRequestsContextAPIProvider } from "../contextAPI/HttpRequestsContextAPI";
import { PostContextAPIProvider } from "../contextAPI/PostContextAPI";
import '../style/dashboard/dashboard.css'

const Dashboard = () => {
    return(
        <div className="dashboard-container">

            <div className="dashboard-header">
                <Header />
            </div>
            <div className="dashboard-leftNavBar">
                    <LeftNavBar />
            </div>
            <PostContextAPIProvider >
            <HttpRequestsContextAPIProvider>
            <div className="dashboard-content">

                <div className="dashboard-postbar">
                    <PostBar />
                </div>

                <div className="dashboard-post">
                    <Post />
                </div>
            </div>
            </HttpRequestsContextAPIProvider>
            </PostContextAPIProvider>

                
        </div>
    )
}

export default Dashboard;