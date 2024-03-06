import { useEffect, useState } from 'react'
import './stylesheets/Page.css'
import PostListItem from './PostListItem'
import AddPost from './Post/AddPost'
import { getPosts, postPost } from './Api'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts()
            .then((jsonData) => { setPosts(jsonData.reverse()) })
    }, [])

    const addPost = (post) => {
        posts.unshift({
            contactId: 1,
            title: post.title,
            content: post.content,
        })
        postPost(post.title, post.content, 1)
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