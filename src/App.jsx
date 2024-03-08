import { createContext, useState } from 'react'
import logo from './assets/logo.svg'
import Main from './components/Main/Main'
import './App.css'

//context
export const AppContext = createContext()

//components
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'

function App() {
  const [user, setUser] = useState(1)
  return (
    <>
      <div className='master-container'>
        <Header/>
        <AppContext.Provider value={{user: user}}>
          <div className='split-container'>
            <Nav/>           
            <Main/>                                
          </div>
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App

/**
 * <div className='master-container'>
        <div className='header-container'>
          
        </div>
        <div className='split-container'>        
          <Nav/>
          <div className='div2'></div>        
        </div>
      </div>
 */