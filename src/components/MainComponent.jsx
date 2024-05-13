import { Route, Routes } from "react-router-dom";
import PostsDashboard from "./PostsDashboard";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";

export default function MainComponent({ loggedInUser }) {
    const [postData, setPostData] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [addComment, setAddComment] = useState({
        postId: '',
        content: '',
        contactId: 0
    })

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/post')
        .then(response => response.json())
        .then(setPostData)
    }, [])

    console.log(postData)

    return (
        <main>
            <Routes >

                <Route path="/" element={<PostsDashboard loggedInUser={loggedInUser} postData={postData} setPostData={setPostData} showMore={showMore} setShowMore={setShowMore} addComment={addComment} setAddComment={setAddComment}/>}/>

                <Route path="/post/:id" element={<SinglePost postData={postData} showMore={showMore} setShowMore={setShowMore} loggedInUser={loggedInUser} addComment={addComment} setAddComment={setAddComment}/>}/>

            </Routes>
        </main>
    )
}