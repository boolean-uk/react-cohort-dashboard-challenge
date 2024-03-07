import { useState, useEffect, createContext} from "react"
import axios from 'axios'
import NewPost from '../components/newpost/NewPost'
import PostList from '../components/postview/PostList'


// User context:
const PostContext = createContext();
const AccountContext = createContext();

function DashBoard() {
    const url1 = `https://boolean-api-server.fly.dev/KantheeK/post`
    const url2 = `https://boolean-api-server.fly.dev/KantheeK/contact`
    const [posts, setPost] = useState([])
    const [accounts, setAccount] = useState([])

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
        const fetchData2 = async () => {
            try {
                const response = await axios.get(url2);
                // console.log(response.data);
                setAccount(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData1();
        fetchData2();
    }, []);

 
  return (
    <PostContext.Provider value={{posts, setPost}} > 
        <AccountContext.Provider value={{accounts, setAccount}} > 
            {accounts && <main className="dashboard">
                <NewPost />
                NEW POST HERE
                <PostList />    
                POST LIST EHRE 6666
            </main>}
        </AccountContext.Provider>
    </PostContext.Provider>
  )
}

export { DashBoard, PostContext, AccountContext}

