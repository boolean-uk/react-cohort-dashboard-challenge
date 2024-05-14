import { Route, Routes } from "react-router-dom";
import PostsDashboard from "./PostsDashboard";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";

export default function MainComponent({ loggedInUser }) {
    const [postData, setPostData] = useState([])
    
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/post')
        .then(response => response.json())
        .then(setPostData)
    }, [])

    return (
        <main>
            <Routes >

                <Route path="/" element={<PostsDashboard loggedInUser={loggedInUser} postData={postData} setPostData={setPostData}/>}/>

                <Route path="/post/:id" element={<SinglePost postData={postData} loggedInUser={loggedInUser}/>}/>

            </Routes>
        </main>
    )
}