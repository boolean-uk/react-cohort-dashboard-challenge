import PostFeedHeader from "./components/PostFeedHeader"
import PostList from "./components/PostList"
import { useState, useEffect } from "react"


export default function Dashboard() {

    const [postList, setPostList] = useState(null)

    const getPosts = () => {
        fetch("https://boolean-api-server.fly.dev/Chloe070196/post")
        .then(r => r.json())
        .then (data => setPostList(data))
    }

    useEffect(getPosts, [])

    
   return(  
        <>  
            {postList ? 
            <section>
                <PostFeedHeader />
                <PostList postList={postList}/>
            </section> :
            <p>loading...</p>
            }
        </>
    )
}