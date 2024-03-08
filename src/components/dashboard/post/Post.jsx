import { useContext, useEffect } from "react";
import { PostContextAPIContext } from "../../../contextAPI/PostContextAPI";
import axios from "axios";
import { HttpRequestsContextAPIContext } from "../../../contextAPI/HttpRequestsContextAPI";
import SinglePost from './SinglePost';
import '../../../style/dashboard/post.css';

const Post = () => {

    const { posts, setPosts} = useContext(PostContextAPIContext)
    const {baseURL} = useContext(HttpRequestsContextAPIContext)

    useEffect(() => {
        
        const fetchData = async () => {
            const response = await axios.get(baseURL);
            console.log(response.data)
            setPosts([...response.data].reverse())
        }
        
        fetchData();
    }, []);


    if(!posts) {
        return <div>Loading...</div>
    }


    return(
        <div className="posts-container">
               {posts.map( (post, index) =>
                    <SinglePost post={post} key={index}/>
                )}
        </div>
    )
}

export default Post;