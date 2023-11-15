import Header from './components/header'
import Nav from './components/nav'
import PostFeed from './components/post-feed'
import './styles/App.css'

function App() {
  return (
  <>
        <div className="grid-container">
          <div className='header-section'>
            <Header/>
          </div>
          <div className="main-grid">
            <div className='nav-bar'>
              <Nav/>
            </div>
            <div className='main-section'>
              <PostFeed/>
            </div>
          </div>
        </div>

        </>

  )
}

export default App
