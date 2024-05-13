import { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import PostLi from "./PostLi";

export default function PostsDashboard({ loggedInUser }) {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/post')
        .then(response => response.json())
        .then(setPostData)
    }, [])

    console.log(postData)

    return (
        <div className="posts-dashboard">
            <section className="new-post-container">
                <ProfileImage loggedInUser={loggedInUser}/>
                <input type="text" placeholder="What's on your mind?" className="new-post-input"/>
                <button className="post-button">Post</button>
            </section>

            <section className="posts-container">
                <ul className="posts-ul">
                    {postData.map((post, index) => {
                        return <PostLi key={index} post={post} loggedInUser={loggedInUser}/>
                    })}
                </ul>
            </section>
        </div>
    )
}