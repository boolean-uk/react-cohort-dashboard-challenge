import { useState, useContext } from 'react';
import {PostsContext} from "./PostFeed"
import { MyContext } from '../../ApiProvider';
function PostForm() {
  const { contact, addPost } = useContext(MyContext); 
  
  const {getInitials} = useContext(PostsContext)
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      contactId: contact.id,
      content: postContent,
      title: 'New Post',
      contact: contact, 
    };

    addPost(newPost);

    setPostContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.container}>
        <div style={styles.circle}>
          <span style={styles.initials}>
            {contact && getInitials(contact.firstName, contact.lastName)}
          </span>
        </div>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Post
        </button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    border: '2px solid #ccc', 
    borderRadius: '10px',
    padding: '20px',
    width: '92%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: '40px',
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    backgroundColor: '#32CD32',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '20px',
  },
  initials: {
    textAlign: 'center',
  },
  textarea: {
    width: '600px',
    height: '25px',
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    resize: 'none',
    backgroundColor: '#e6ebf5',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#64648c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '150px'
  },
};


export default PostForm;
