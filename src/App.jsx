import { useState, useEffect, createContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Post from './pages/Post';
import './App.css';
export const StyleContext = createContext();
export const DataContext = createContext();


function App() {
  const apiUsername = 'sebHanssen'
  const [user, setUser] = useState()
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  const colorList = [
    "#F1F5D8", "#D6FFC1", "#B9FFAF", "#97FA9A", "#8AF0BF",
    "#B1E6F3", "#72DDF7", "#79B8F4", "#FAE588", "#FCEFB4",
    "#FDF8E1", "#EEEAFD", "#D8CAF6", "#C2A9EF", "#FCB274",
    "#FBCA9A", "#FCDFAA", "#F3CFCE", "#CBC7F8", "#FFADAD",
    "#E6E6FA", "#B7EDF7", "#B4DAF9", "#FED8EC", "#FBB1D3",
    "#FFF1C2", "#9BF6FF", "#CAFFBF", "#FDFFB6", "#FFD6A5",
  ];

  function getColorFromInitials(initials) {
    const hashCode = initials.split('').reduce((hash, char) => {
      return char.charCodeAt(0) + ((hash << 5) - hash);
    }, 0);

    const index = Math.abs(hashCode % colorList.length);

    return colorList[index];
  }

  function getInitials(firstName, lastName) {
    return firstName[0] + lastName[0]
}

  function getPosts() {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/post`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.reverse());
      })
      .catch((error) => console.log(error));
  }

  function getCommentsByPostId(id, setValue) {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/post/${id}/comment`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue(data);
      })
      .catch((error) => console.log(error));
  }

  function getContacts() {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/contact/`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setUser(data.find(x => x.id === 1))
      })
      .catch((error) => console.log(error));
  }

  function getContactById(id){
    return contacts.find(x => x.id === id)
  }

  function postPost(post) {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/post`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        contactId: post.contactId
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([data, ...posts]);
      })
      .catch((error) => console.log(error));
  }

  function postComment(postId, content, contactId) {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/post/${postId}/comment`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: postId,
        content: content,
        contactId: contactId
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function deletePost(id) {
    fetch(`https://boolean-api-server.fly.dev/${apiUsername}/post` + id, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(posts.filter(post => post.id !== parseInt(id)));
      })
      .catch((error) => console.log(error));

  }

  useEffect(() => {
    getPosts();
    getContacts();
  }, []);

  return (
    <div>
      <StyleContext.Provider value={{ getColorFromInitials: getColorFromInitials, getInitials: getInitials }}>
        <Header />
        <Sidebar />

        <div className='main'>
          <DataContext.Provider value={{ 
            user: user,
            posts: posts, 
            getContactById: getContactById, 
            getCommentsByPostId: getCommentsByPostId,
            postPost: postPost,
            postComment: postComment
            }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                  path="/post/:id"
                  element={<Post />}
               />
            </Routes>
          </DataContext.Provider>
        </div>
      </StyleContext.Provider>
    </div>
  );
}

export default App;
