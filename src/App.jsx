import './App.css'

import Header from './Header'
import SideMenu from './SideMenu'
import Main from './Main'

function App() {

  return (
    <div className="container">
      <Header />
      <div className="container-nav-main">
        <SideMenu />
        <Main />
      </div>
    </div>
  )
}

export default App
