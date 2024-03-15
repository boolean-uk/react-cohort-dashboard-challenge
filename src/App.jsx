import { useEffect, useState, createContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import DashBoard from './components/Dashboard'
import PostView from './components/PostView'
import Header from './components/Header'
import NavLeft from './components/NavLeft'

const appCtx = createContext()

function App() {
  const [posts, setPosts] = useState(false)
  const [post, setPost] = useState([])
  const [contacts, setContacts] = useState([])
const [user, setUser] = useState()
const [isLoading, setLoading] = useState(false)
const [serverUrl, setUrl] = useState('https://boolean-api-server.fly.dev/carob16/post/')
  
useEffect(()=>{
  if(posts === false){
     GetAllPosts()
     GetAllContacts()
  }
  
},[serverUrl])

useEffect(()=> {
  GetAllPosts()
},[post])


//------GET-REQUEST-------------
async function GetAllPosts(){
  setLoading(true)
  try{
    const response = await fetch(serverUrl)
        let data = await response.json();
        let array = []
        data.forEach(element => {
          array.unshift(element)
        });
        setPosts(array);
      } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

async function GetAllContacts(){
  let url = 'https://boolean-api-server.fly.dev/carob16/contact';
  try{setLoading(true)
        let response = await fetch(url)
        let contacts = await response.json();
        setContacts(contacts);
        setUser(contacts[0]);
      } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

async function GetPostsById(inputId){
  setLoading(true)
  try{
    await fetch('https://boolean-api-server.fly.dev/carob16/post/'+inputId)
        .then(res => res.json())
        .then(data => setPost(data))
      } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

//------POST-REQUEST-------------
async function AddPost(input){
  const model = {content:input.content?input.content:'',contactId:input.contactId, title:input.title?input.title:'' }
  setLoading(true);  
  try {
      const response = await fetch('https://boolean-api-server.fly.dev/carob16/post/',
      { method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(model),
        });
      const json = await response.json();
      setPost(json);
    
  } catch (error) {
      console.error(error);
  } finally {
      setLoading(false);
  }
}


//-------PUT-REQUEST------------

async function EditPost(input){
  const model = {content:input.content?input.content:'',contactId:input.contactId, title:input.title?input.title:'' }
  const id = input.id;
  setLoading(true);  
  try {
      const response = await fetch('https://boolean-api-server.fly.dev/carob16/post/'+id,
      { method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(model),
        });
      const json = await response.json();
      let updateArr = posts.map((post)=>(post.id !== json.id? post:json))
      setPosts(updateArr);
  } catch (error) {
      console.error(error);
  } finally {
      setLoading(false);
  }
}

//-----DELETE-REQUEST-------------
async function RemovePost(input){
  const id = input;
  setLoading(true);  
  try {
      const response = await fetch('https://boolean-api-server.fly.dev/carob16/post/'+id,
      { method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        });
      const json = await response.json();
      let updatePostArr = posts.filter(post => post.id !== json.id);
      setPosts(updatePostArr);
  } catch (error) {
      console.error(error);
  } finally {
      setLoading(false);
  }
}


//---------RETURN--------------------------------
return (
  <><appCtx.Provider value={{posts:posts, AddPost:AddPost, user:user, post:post, setPost:setPost, contacts:contacts}}><Header/>
      <div className='container-2'>
      <NavLeft/>
      <div><main>  
        {isLoading?<p>Loading...</p>:<></>}
        
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/post/:id' element={<PostView/>}/>
      <Route path='/profile/:id' element={<PostView/>}/>
    </Routes>  
    </main></div></div></appCtx.Provider>
  </>
)
}

export { App, appCtx }