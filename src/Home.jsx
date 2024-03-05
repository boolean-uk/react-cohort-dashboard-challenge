import { useEffect, useState } from 'react'
import './stylesheets/Page.css'
import PostListItem from './PostListItem'
import AddPost from './Post/AddPost'

const URL = 'https://boolean-api-server.fly.dev/Annemoon-de-Groen/post'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        console.log("Get posts...")
        fetch(URL, {}).then((response) => {
            return response.json();
        }).then((jsonData) => { setPosts(jsonData) })
    }, [])

    const addPost = (post) => {
        posts.unshift({
            contactId: 1,
            title: "Title",
            content: post,
        })
        setPosts([...posts])
        console.log(posts)
    }
    return (
        <div className='page'>
            <ul>
                <li><AddPost setPosts={addPost} /></li>
                {posts.map((post) => { return (<li><PostListItem post={post} /></li>) })}
            </ul>

        </div>
    )
}

export default Home