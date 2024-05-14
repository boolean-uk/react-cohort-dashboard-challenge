import NewPost from "../Subcomponents/NewPost"
import PostCard from "../Subcomponents/PostCard"
import { useState, useEffect } from "react"

export default function Feed () {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await fetch('https://boolean-api-server.fly.dev/MrStashy/post')
        const json = await data.json()
        setPosts(json)
    }
    const getUsers = async () => {
        try {
        const data = await fetch('https://boolean-api-server.fly.dev/MrStashy/contact')
        const json = await data.json()
        setUsers(json) } catch (error) {
            console.log(error)
        }
    }
   
    return (
        <div className="m-5 flex flex-col gap-3">
        <NewPost />
        {posts.map((post, index) => {
            return(
                <PostCard post={post} users={users} key={index}/>
            )
        })}
        </div>
    )
}