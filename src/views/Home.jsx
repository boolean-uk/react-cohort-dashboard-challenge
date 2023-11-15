import { fetchPosts, addPost, deletePost } from '../api/axios'
import { Form, Input, Button, FloatButton } from 'antd'
import shufflePosts from '../utilities/shufflePosts'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useUser } from '../UserContext'
import Post from '../components/Post'

function Home() {

  const { defaultUser } = useUser();

  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const { comment } = useLocation().state || {};

  // const authorInitials = (name) => {
  //   const nameParts = name.split(' ');
  //   const initials = nameParts.map((part) => part.charAt(0));
  //   return initials.join('');
  // };

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        const shuffledPosts = shufflePosts(data);
        setPosts(shuffledPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const addedPost = {
      title: body,
      content: body,
      contactId: defaultUser.id,
      authorInitials: 'test',
      authorName: defaultUser.name,
    };

    addPost(addedPost)
      .then((response) => {
        console.log('New post added:', response);
        setPosts([response, ...posts]);
        setBody('');
      })
      .catch((error) => {
        console.error('Error adding a new post:', error);
      });
  };

  const handleDeletePost = (postId) => {
    console.log("Post ID:", postId);
    deletePost(postId)
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
        console.log("Post deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '11px', marginTop: '7px' }}>
        <div className="author-initials" style={{ marginRight: '11px' }}>
          {/* <p>{authorInitials(defaultUser.name)}</p> */}
        </div>
        <Form className="add-form" onSubmit={handlePostSubmit} style={{ flex: 1 }}>
          <Input
            style={{ backgroundColor: '#f3f3f3', color: 'black', fontSize: '11px', borderRadius: '0', height: '31px' }}
            id="text"
            value={body}
            bordered={false}
            placeholder="What's on your mind?"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </Form>
        <Button type="text" onClick={handlePostSubmit} style={{ marginLeft: '31px', backgroundColor: '#f0f0f0', color: 'black', height: '31px', fontSize: '11px', fontWeight: 'bold', borderRadius: '0' }}>Post</Button>
      </div>
      <div className="home">
        {posts.map((post) => (
          <Post key={post.id} post={post} onDeletePost={handleDeletePost} comment={comment} />
        ))}
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </>
  );
}

export default Home;