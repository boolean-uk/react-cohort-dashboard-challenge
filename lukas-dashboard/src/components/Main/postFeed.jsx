import { useEffect, useState } from "react"
import { get, contactURL, postURL } from "../client.jsx"



export default function PostFeed() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        get(contactURL)
            .then(data => setUsers(data))

        get(postURL)
        .then(data=> setPosts(data))

    },[])
console.log(users)
console.log(posts)

    return (
        <div>HI</div>

    )
}