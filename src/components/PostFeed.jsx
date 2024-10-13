import { useEffect, useState } from "react";
import Post from "./Post";
import PostItem from "./PostItem";

function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchPosts();
    fetchCurrentUser();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/alinjo/post");
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const data = await response.json();
      const updatedPosts = await Promise.all(data.map(fetchPostWithUserInfo));
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchPostWithUserInfo = async (post) => {
    try {
      const contactResponse = await fetch(`https://boolean-uk-api-server.fly.dev/alinjo/contact/${post.contactId}`);
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        return {
          ...post,
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          favouriteColour: contactData.favouriteColour
        };
      }
      return post;
    } catch (error) {
      console.error("Error fetching user info for post:", error);
      return post;
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/alinjo/contact/1");
      if (!response.ok) {
        throw new Error("Failed to fetch current user data!");
      }
      const userData = await response.json();
      setCurrentUser(userData);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const addNewPost = async (newPost) => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/alinjo/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      
      const createdPost = await response.json();
      const postWithUserInfo = {
        ...createdPost,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        favouriteColour: currentUser.favouriteColour
      };
      setPosts(prevPosts => [postWithUserInfo, ...prevPosts]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const addComment = async (postId, commentContent) => {
    try {
      const commentData = {
        postId: postId, 
        content: commentContent,
        contactId: currentUser.id,
      };

      const response = await fetch(`https://boolean-uk-api-server.fly.dev/alinjo/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add comment: ${response.status}`);
      }

      const newComment = await response.json();
      const updatedComment = {
        ...newComment,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        favouriteColour: currentUser.favouriteColour,
      };

      setPosts(prevPosts => prevPosts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...(post.comments || []), updatedComment] }
          : post
      ));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };


  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-feed">
      <PostItem addNewPost={addNewPost} currentUser={currentUser} />
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          firstName={post.firstName}
          lastName={post.lastName}
          favouriteColour={post.favouriteColour}
          postId={post.id}
          comments={post.comments || []}
          addComment={addComment}
        />
      ))}
    </div>
  );
}

export default PostFeed;
