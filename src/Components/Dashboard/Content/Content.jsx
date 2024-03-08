import { Route, Routes } from 'react-router-dom'
import PostList from '../PostList/PostList'
import SinglePost from '../SinglePost/SinglePost'

function Content() {
  return (
    <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/view/:id" element={<SinglePost />} />
    </Routes>
  )
}

export default Content
