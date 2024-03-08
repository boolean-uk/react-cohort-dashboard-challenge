import { useContext, useEffect } from "react";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import PostBar from "../components/dashboard/PostBar";
import Post from "../components/dashboard/post/Post";
import { HttpRequestsContextAPIContext} from "../contextAPI/HttpRequestsContextAPI";
import { PostContextAPIProvider } from "../contextAPI/PostContextAPI";
import '../style/dashboard/dashboard.css'
import { UserContextAPIContext } from "../contextAPI/UserContextAPI";
import axios from "axios";

const Dashboard = () => {


    const {setUser} = useContext(UserContextAPIContext)
    const {baseURLContact} = useContext(HttpRequestsContextAPIContext)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(baseURLContact + "/1");
                if(response) {
                    setUser(response.data);
                }
             
            } catch (error) {
               console.error(error) 
            }
        }
      fetchData();
    }, []);

    return(
        <div className="dashboard-container">

            <div className="dashboard-header">
                <Header />
            </div>
            <div className="dashboard-leftNavBar">
                    <LeftNavBar />
            </div>
            <PostContextAPIProvider >
        
            <div className="dashboard-content">

                <div className="dashboard-postbar">
                    <PostBar />
                </div>

                <div className="dashboard-post">
                    <Post />
                </div>
            </div>
      
            </PostContextAPIProvider>

                
        </div>
    )
}

export default Dashboard;