import { createContext, useEffect, useState, useCallback } from 'react';


export const MyContext = createContext();

function ApiProvider({ children }) {
  const [postsWithContacts, setPostsWithContacts] = useState([]);
  const [commentsWithContacts, setCommentsWithContacts] = useState([]);
  const [contactWithId, setContactWithId] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [contact, setContact] = useState(null);

  const fetchPostsWithContacts = async () => {
    try {
      const postResponse = await fetch(
        "https://boolean-uk-api-server.fly.dev/sebgro98/post"
      );
      const posts = await postResponse.json();

      const contactPromises = posts.map(async (post) => {
        const contactResponse = await fetch(
          `https://boolean-uk-api-server.fly.dev/sebgro98/contact/${post.contactId}`
        );
        const contact = await contactResponse.json();
        return { ...post, contact };
      });

      const postsWithContacts = await Promise.all(contactPromises);
      setPostsWithContacts(postsWithContacts);
    } catch (error) {
      console.error("Error fetching posts or contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContactById = useCallback(async (id) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/sebgro98/contact/${id}`);
      const data = await response.json();
      setContactWithId(data);
    } catch (error) {
      console.error('Error fetching contact:', error);
    }
  }, []);
  

  const fetchCommentsWithContacts = async (postId) => {
    try {
      console.log("Fetching comments for post ID:", postId)
      const commentsResponse = await fetch(`https://boolean-uk-api-server.fly.dev/sebgro98/post/${postId}/comment`);
      const comments = await commentsResponse.json();
  
      const contactPromises = comments.map(async (comment) => {
        const contactResponse = await fetch(`https://boolean-uk-api-server.fly.dev/sebgro98/contact/${comment.contactId}`);
        const contact = await contactResponse.json();
        return { ...comment, contact };
      });
  
      const commentsWithContacts = await Promise.all(contactPromises);
      setCommentsWithContacts(commentsWithContacts);
    } catch (error) {
      console.error("Error fetching comments or contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(commentsWithContacts)
  
  const addComment = async (postId, newComment) => {
    try {
        const response = await fetch(
            `https://boolean-uk-api-server.fly.dev/sebgro98/post/${postId}/comment`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newComment),
            }
        );

        if (!response.ok) throw new Error("Error saving comment to API");
        
        
        return await response.json();
    } catch (error) {
        console.error("Failed to add comment:", error);
        throw error;
    }
};


  const addPost = async (newPost) => {
    try {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/sebgro98/post",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPost),
        }
      );

      if (!response.ok) throw new Error("Error saving post to API");

      const savedPost = await response.json();

      setPostsWithContacts((prevPosts) => [...prevPosts, savedPost]);
    } catch (error) {
      console.error("Error submitting new post:", error);
    }
  };


  const fetchContact = async () => {
    try {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/sebgro98/contact/1"
      );
      const contactData = await response.json();
      setContact(contactData);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };


  useEffect(() => {
    fetchPostsWithContacts();
    fetchContact();
  }, []);

  if(contact)

  return (
    <MyContext.Provider value={{ postsWithContacts, commentsWithContacts, 
      fetchCommentsWithContacts, setPostsWithContacts, contactWithId, 
      fetchContactById, setContactWithId, addComment, contact, addPost }}>
        {children}
    </MyContext.Provider>
  );
}

export default ApiProvider;
