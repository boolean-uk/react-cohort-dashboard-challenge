import { createContext, useState } from 'react';

const PostContextAPIContext = createContext();


const PostContextAPIProvider = ({children}) => {
    const [posts, setPosts] = useState();

    return (

    <PostContextAPIContext.Provider
    value={{
        posts,
        setPosts,
    }}>
    
    {children}
    </PostContextAPIContext.Provider>

    )
}


export {PostContextAPIContext, PostContextAPIProvider}