import { useContext, useState } from 'react'
import ProfilePicturePost from '../profile/ProfilePicturePost'
import { UserContext } from '../../contexts/UserContext'
import { AppContext } from '../../App'

export default function CreatePost() {
  const user = useContext(UserContext)
  const {posts, setPosts} = useContext(AppContext)
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setText(text);

    // split the text
    const sentences = text.split(/[.!?]/);

    // first sentence is title
    setTitle(sentences[0]);

    // rest is content
    setContent(sentences.slice(1).join('.').trim());
  };

  const handleSubmit = () => {

    if(!title || !content) return;

    fetch('https://boolean-api-server.fly.dev/giarreh/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content,
        contactId: user.id
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
      setPosts([{title, content, contactId: user.id}, ...posts])
    })
    .then(() => {
      setText('');
      setTitle('');
      setContent('');
        });
  };

  
  return (
    <div className='create-post'>
      <ProfilePicturePost initials={`${user.firstName[0]}${user.lastName[0]}`} color={user.favouriteColour} author={user} />
      <textarea placeholder="What's on your mind? HINT: Title is the first sentence of your post" className='postInput main-background' value={text} onChange={handleInputChange} />
      <div className='postButton' onClick={handleSubmit}>
        <p>Post</p>
      </div>
    </div>
  )
}
