import { createContext} from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

const PostsContext = createContext();

function PostFeed() {
  
  
  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return "";
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <PostsContext.Provider
      value={{getInitials }}
    >
      <PostForm />
      <PostList />
    </PostsContext.Provider>
  );
}

export { PostFeed, PostsContext };
