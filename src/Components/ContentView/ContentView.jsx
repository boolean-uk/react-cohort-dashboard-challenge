import "./ContentView.css"
import { Routes, Route } from 'react-router-dom'
import PostView from "./PostView/PostView"
import PostDetails from "./PostDetails/PostDetails"
import ProfileView from "./ProfileView/ProfileView"

const ContentView = () => {  
    return (
        <div className="content-view-container scroll-container">
            <Routes>
                <Route 
                    path="/"
                    element={<PostView/>}
                    />
                <Route
                    path="/post/:id"
                    element={<PostDetails/>}
                />
                <Route 
                    path="/profile/:id"
                    element={<ProfileView />}
                />
            </Routes>
        </div>
    )
}

export default ContentView