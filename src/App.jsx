import { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import logo from './assets/logo.svg'
import Main from './components/Main/Main'
import './App.css'

//context
export const AppContext = createContext()

//components
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import PostView from './components/PostView/PostView'
import Profile from './components/Profile/Profile'

function App() {
  const [user, setUser] = useState()
  const [posts, setPosts] = useState([])
  console.log(user)
  async function GetPosts(){
    try{
        const responsePosts = await fetch("https://boolean-api-server.fly.dev/louisshr/post",{
            method: 'GET'
        })        

        const responseContacts = await fetch("https://boolean-api-server.fly.dev/louisshr/contact",{
            method: 'GET'
        })

        const postsData = await responsePosts.json()
        postsData.reverse()
        const contactsData = await responseContacts.json()
        const data = postsData.map(p => ({
            ...p,
            ...contactsData.find(c => c.id === p.contactId),
            postId: p.id
        }))                        
        
        const dataWithComments = await Promise.all(data.map(async (d) => {
            const comment = await GetComments(d.postId);                
            return {
                ...d,
                comments: comment
            };
        }));        
        
        const dataCommentsContact = dataWithComments.map(d => ({
            ...d,
            comments: d.comments.map(comment => ({
                ...comment,
                ...contactsData.find(contact => contact.id === comment.contactId)
            }))
        }))                                             
        setPosts(dataCommentsContact)
    }
    catch(error){
        console.log("Error in GetPosts(): " + error)
    }
  }

  async function GetComments(id){
      const response = await fetch(`https://boolean-api-server.fly.dev/louisshr/post/${id}/comment`, {
          method: 'GET'
      })
      const data = await response.json()        
      return data
  }

  async function GetUser(){
    const response = await fetch(`https://boolean-api-server.fly.dev/louisshr/contact/1`, {
      method: 'GET'
    })
    const data = await response.json()
    if (response.ok) setUser(data)
  }

  useEffect(() => {
      const fetchData = async () => {
          await GetPosts()
          await GetUser()
      }
      fetchData()        
  }, [])

  return (
    <>
      <div className='master-container'>
      <AppContext.Provider value={{user: user, posts: posts, getPosts: GetPosts}}>
        <Header/>        
          <div className='split-container'>
            <Nav/>     
            <Routes>
              <Route path='/' element={<Main/>}/> 
              <Route path='/postview/:id' element={<PostView/>} />
              <Route path='/profile' element={<Profile/>} />
            </Routes>                                   
          </div>
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App

/**
 <div className='master-container'>
        <Header/>
        <AppContext.Provider value={{user: user}}>
          <div className='split-container'>
            <Nav/>     
            <Routes>
              <Route path='/' element={<Main/>}/> 
              <Route path='postview/:id' element={<PostView/>} />
            </Routes>                                   
          </div>
        </AppContext.Provider>
      </div>
 */