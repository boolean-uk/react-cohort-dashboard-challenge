import { useEffect, useState, createContext } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import LetteredAvatar from './components/LetteredAvatar';

import TitleHeader from './assets/title-header.svg';
import HomeIcon from './assets/home-icon.svg';
import ProfileIcon from './assets/profile-icon.svg';
// import defaultPosts from './assets/data/defaultPosts.js'
import user from './assets/data/user.js'
import imgDoge from './assets/data/doge.jpg'

export const MyContext = createContext()


import './App.css';
// import Posts from './components/Posts.jsx';



function App() {

  // Dummy data: defaultPosts
  const [posts, setPosts] = useState([])
  const [content, setContent] = useState('')
  const [comments, setComments] = useState('')
  const [contacts, setContacts] = useState([])

 



  // Get Posts from API and add empty comments
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/noahlenn/post')
      .then(respone => respone.json())
      .then(data => {
        const postWithComments = data.map(post => ({
          ...post, 
          comments: [],
        }))
        setPosts(postWithComments)      
      })  
      .catch(error => console.error("Error fetching contacts fro API: ", error))
  }, [])
  console.log('Posts: ', posts)

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/noahlenn/contact')
      .then(respone => respone.json())
      .then(data => setContacts(data))
      .catch(error => console.error("Error fetching contacts fro API: ", error))
  }, [])
    console.log('Contacts: ', contacts)


  const addPost = (e) => {
      e.preventDefault()
      setPosts([
          {
              ...user,
              content,
              comments: []
          },
          ...posts
      ])
      setContent('');
  }

  const addComment = (index) => {
    const updatedPosts = [...posts]
    updatedPosts[index].comments.push({ user: user.name, text: comments[index] })
    setPosts(updatedPosts)
    const updatedComments = [...comments]
    updatedComments[index] = ''
    setComments(updatedComments)
    
  }

  const getPostContact = (post) => {
    return contacts.find(aContact => aContact.id === post.contactId)
  }
  

  return (
    <>
    <div className="container">
    <MyContext.Provider value={ { user, posts, setPosts} }>
      <Header />
      <div className="container-nav-main">
        <nav className="sidebar">
  
          <Link to="/">
            <img src={HomeIcon} 
            alt="Home Icon" 
            className="icon" />
          </Link>
        
          <Link to="/profile">
            <img src={ProfileIcon} 
            alt="Profile Icon" 
            className="icon" />
          </Link>

        </nav>

        {/* Problems when making Posts its own component si its in app for now */}

        {/* Posts Component*/}
        <main className="main">
          <Routes>
            <Route 
              path="/" 
              element={<Home user={user}/>} />
            <Route 
              path="/profile" 
              element={<ProfilePage />} />
          </Routes>

          {/* Create LetteredAvatar for each Contact */}
          {/* <div className='contacts'>
          {contacts.map((contact, index) => (
                <div key={index} className="contact">
                  <LetteredAvatar contact={contact} />
                  <span className="contact-name">{contact.firstName} {contact.lastName}</span>
                  
                </div>
              ))}
          </div> */}

        {/* CreatePost Component*/}
        <form onSubmit={addPost}>
                <div className="avatar-section">
                    <div className="profile-icon"><img src={imgDoge}/></div>
                </div>

                <div className="textarea-section">
                    <textarea
                    className="content"
                    type="text"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>

                <div></div>

                <div className="actions-section">
                    <div className="actions">
                        <i className="fa-regular fa-image action-icon"></i>
                        <i className="fa-solid fa-list action-icon"></i>
                        <i className="fa-regular fa-face-smile action-icon"></i>
                        <i className="fa-regular fa-calendar action-icon"></i>
                        <i className="fa-solid fa-location-dot action-icon"></i>
                    </div>

                    <button type="submit" disabled={content.length < 1} className="tweet-btn">Post</button>
                </div>
            </form>

          {posts.map((post, index) => (
              <div key={index} className="post-body-background">
                <div className="post-header">
                  
                  <LetteredAvatar contact={getPostContact(post)}/>
                  <div>
                  <span className="post-author">
                    {getPostContact(post)?.firstName} {getPostContact(post)?.lastName}
                  </span>
                  <br />
                  <h3 className="post-content">{post.title}</h3>
                  </div>
     
                </div>
                
                
                <p className="post-content">{post.content}</p>

                {/* Comments */}
                <div className='comments'>
                  {post.comments && post.comments.map((comment, commentIndex) => (
                    <div key={commentIndex} className='comment'>
                      <span className='comment-user'>
                        {comment.user}: 
                      </span>
                      {' '}
                      <span>
                        {comment.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                  {/* Comment Form */}
                <div className='comment-post'>
                  <input
                    type="text"
                    value={comments[index]}
                    onChange={(e) => {
                      const updatedComments = [...comments]
                      updatedComments[index] = e.target.value
                      setComments(updatedComments)
                      
                    }}
                    placeholder="Add a comment..."
                  />
                  <button onClick={() => addComment(index)}>
                    Submit
                  </button>

                  
                  
                </div>

              </div>
            ))}

        </main>
      </div>
      </MyContext.Provider>

    </div>
  </>
  );
}

export default App


