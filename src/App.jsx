import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import { Routes, Route as ReactDOMRoute } from 'react-router-dom'
import ProfileForm from './Components/ProfileForm'
import SinglePostPage from './Components/Main/SinglePostPage'
import Posts from './Components/Main/Posts'  
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Aside />
        <Routes>
          <ReactDOMRoute exact path="/"/>  
          <ReactDOMRoute path="/profileForm" element={<ProfileForm />} />
          <ReactDOMRoute path="/posts" element={<Posts />} />
          <ReactDOMRoute path="/posts/:id" element={<SinglePostPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
