import { useContext, useEffect, useState, createContext } from "react";
import { UserContext } from '../App';
import Posts from "../components/posts/Posts";
export const PostContext = createContext();

export default function Home() {
    const [posts, setPosts] = useState([]);
    const user = useContext(UserContext);
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/spectraldesign/post')
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, []);

    return (
        <>
            <PostContext.Provider value={{ posts, setPosts }}>
                <UserContext.Provider value={user}>
                    {
                        posts.length > 0 ? <Posts /> : <h1>Loading...</h1>
                    }
                </UserContext.Provider>
            </PostContext.Provider>
        </>
    )
}