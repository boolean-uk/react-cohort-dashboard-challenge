import { useEffect, useState } from 'react'
import '../Styling/Feed.css'
import CreatePost from './Feed/CreatePost'
import Posts from './Feed/Posts'


function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/post')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [setPosts])

    return (
        <section className="feed">
            <CreatePost />
            <Posts posts={posts}/>
        </section>
    )
}
export default Feed