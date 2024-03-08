import { Route, Routes } from 'react-router-dom'

import { Home } from './Home'

import './style.css'
import Profile from './Profile'
import SinglePost from './Home/SinglePost'

/*
  TODO: Have /profile redirect to main user profile, /profile/1
*/
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