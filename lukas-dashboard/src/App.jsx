import { Route, Routes } from "react-router-dom"

import Header from './components/Header/header'
import Main from './components/Main/main'
import LeftMenu from './components/Left-menu/left-menu'
import SinglePost from "./components/Main/singlePost"

function App() {

  return (
    <>
      <div className='main-app-grid'>
        <Header />
        <LeftMenu />
        <Main />
      </div>
      <Routes>
        <Route
          path='./components/post/:id'
          element={<SinglePost />}
        />
      </Routes>
    </>
  )
}

export default App
