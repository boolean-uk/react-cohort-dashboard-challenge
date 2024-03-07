import { useContext, useEffect, useState, createContext } from "react";
import { UserContext } from '../App';
import Posts from "../components/posts/Posts";
import "../styles/Home.css";
import CreatePost from "../components/posts/CreatePost";

export const PostContext = createContext();

export default function Home() {
    const [posts, setPosts] = useState([]);
    const user = useContext(UserContext);
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/spectraldesign/post')
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => {
                    return b.id - a.id;
                });
                setPosts(sortedData);
            })
    }, []);

    return (
        <div className="home">
            <PostContext.Provider value={{ posts, setPosts }}>
                <UserContext.Provider value={user}>
                    <CreatePost />
                    {
                        posts.length > 0 ? <Posts /> : <h1>Loading...</h1>
                    }
                </UserContext.Provider>
            </PostContext.Provider>
        </div>
    )
}