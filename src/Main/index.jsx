import { Route, Routes } from 'react-router-dom'

import { Home } from './Home'

import './style.css'
import Profile from './Profile'
import SinglePost from './Home/SinglePost'

function Main() {
    return(
        <div className="main">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/:id"
            element={<SinglePost />}
          />
          <Route
            path="/profile/:id"
            element={<Profile />}
          />
        </Routes>
        </div>
    )
}

export default Main