import { Route, Routes } from "react-router-dom";
import PostsDashboard from "./PostsDashboard";
import SinglePost from "./SinglePost";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export default function MainComponent({ loggedInUser }) {
    const [postData, setPostData] = useState([])
    
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/post')
        .then(response => response.json())
        .then(setPostData)
    }, [])

    return (
        <DataContext.Provider value={{ postData, setPostData }} >
            <main>
                <Routes >

                    <Route path="/" element={<PostsDashboard loggedInUser={loggedInUser} />}/>

                    <Route path="/post/:id" element={<SinglePost loggedInUser={loggedInUser}/>}/>

                </Routes>
            </main>
        </DataContext.Provider>
    )
}