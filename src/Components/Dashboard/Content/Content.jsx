import { Route, Routes } from 'react-router-dom'
import PostList from '../PostList/PostList'
import SinglePost from '../SinglePost/SinglePost'
import Profile from '../Profile/Profile'

function Content() {
  return (
    <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/view/:id" element={<SinglePost />} />
        <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  )
}

export default Content
