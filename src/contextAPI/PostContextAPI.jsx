import { createContext, useState } from 'react';

const PostContextAPIContext = createContext();


const PostContextAPIProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [postsHistory, setPostsHistory] = useState([]);
    
    return (

    <PostContextAPIContext.Provider
    value={{
        posts,
        setPosts,
        postsHistory,
        setPostsHistory,
    }}>
    
    {children}
    </PostContextAPIContext.Provider>

    )
}


export {PostContextAPIContext, PostContextAPIProvider}