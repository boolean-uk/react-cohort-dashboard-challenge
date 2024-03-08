import { useState, useEffect, createContext} from "react"
import axios from 'axios'
import NewPost from '../components/newpost/NewPost'
import PostList from '../components/postview/PostList'


// User context:
const PostContext = createContext();

function DashBoard() {
    const url1 = `https://boolean-api-server.fly.dev/KantheeK/post`
    const [posts, setPost] = useState([])

    // Fetching data
    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response = await axios.get(url1);
                // console.log(response.data);
                setPost(response.data);
            } catch (error) {
                console.log(error)
            }
        }
     
        fetchData1();
    }, []);

 
  return (
    <PostContext.Provider value={{posts, setPost}} > 
        {posts && <main className="dashboard">
            <NewPost />
            NEW POST HERE
            <PostList />    
            POST LIST EHRE 6666
        </main>}
    </PostContext.Provider>
  )
}

// export { DashBoard, PostContext, AccountContext}
export { DashBoard, PostContext}

