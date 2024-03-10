import React, { useContext, useEffect, useState } from 'react';
import Post from '../components/Home/Post';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';

function PostProfile() {
  const { id } = useParams();
  const dataContext = useContext(DataContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = dataContext.posts.find(post => post.id === parseInt(id));
    setPost(post);
  }, [id, dataContext.posts]);

  function getContact(post) {
    const result = dataContext.contacts.find(contact => contact.id === post.contactId);
    return result ?? { firstName: "User", lastName: "Name", profileImage: '' };
  }

  return (
    <main className="content">
      <section className='feed'>
        {post && <Post 
          data={post}
          contact={getContact(post)}
        />}
      </section>
    </main>
  );
}

export default PostProfile;