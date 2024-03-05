import { createContext, useEffect, useState } from "react"
import PostItem from "./Components/PostItem"
import PostPosts from "./Components/PostPosts"

export const AddPostContext = createContext()

export default function HomePage()
{
    const [posts, setPosts] = useState([])

    useEffect(() =>
    {
        fetch("https://boolean-api-server.fly.dev/klaand01/post")
        .then((response) => response.json())
        .then((data) => {
            //console.log("DATA", data)
            setPosts(data.reverse())
        })
    }, [])

    const addPost = (data) =>
    {
        console.log("NEWPOST", data.newPost)
        setPosts([data.newPost, ...posts])
    }

    return (
        <>
        <header>
            <h1>Cohort Manager</h1>
        </header>
        <AddPostContext.Provider value={{addPost}}>
            <PostPosts posts={posts}/>
        </AddPostContext.Provider>
        <ul>

            {posts.map((post, index) => (
                <li key={index}>
                    <PostItem post={post}/>
                </li>
            ))}
        </ul>
        </>
    )
}