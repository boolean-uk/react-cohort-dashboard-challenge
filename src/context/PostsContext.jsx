import { useState, createContext, useEffect } from "react";

const PostsContext = createContext({posts: [], setPosts:()=>{}});

function PostsProvider({ children }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/PerikK/post')
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  const value = {
    posts,
    setPosts,
  };


  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
export { PostsContext, PostsProvider };
