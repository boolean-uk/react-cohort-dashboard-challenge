import React, { createContext, useContext, useState } from "react";

const PostAuthorContext = createContext();

export const usePostAuthor = () => {
  return useContext(PostAuthorContext);
};

export const PostAuthorProvider = ({ children }) => {
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState({});

  return (
    <PostAuthorContext.Provider
      value={{ author, setAuthor, posts, setPosts, contacts, setContacts }}
    >
      {children}
    </PostAuthorContext.Provider>
  );
};
