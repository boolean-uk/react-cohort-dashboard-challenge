// this body will always be here. but inside it, it will render the comments, or the profile settings

import { Route, Routes } from "react-router-dom"

import Posts from './posts/Posts'
import Profile from './profile/Profile'
import SinglePost from "./posts/SinglePost"

export default function Body() {
    return (
        <div className='display_body'>
            <Routes>
                <Route index element={<Posts />} />
                <Route path="profile" element={<Profile />} />
                <Route path="post/:id" element={<SinglePost />} />
            </Routes>
        </div>
    )
}
