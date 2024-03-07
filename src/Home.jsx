import { useContext, useEffect, useState } from 'react'
import './stylesheets/Page.css'
import PostListItem from './PostListItem'
import AddPost from './Post/AddPost'
import { deletePost, getPosts, postPost, updatePost } from './Api'
import { PostContext } from './App'

function Home() {
    const { posts, setPosts } = useContext(PostContext)
    useEffect(() => {
        getPosts()
            .then((jsonData) => { setPosts(jsonData.reverse()) })
    }, [])

    const addPost = (post) => {

        postPost(post.title, post.content, 1).then((data) => {
            posts.unshift(data);
            setPosts([...posts])
        })
    }

    const removePost = (post) => {
        deletePost(post.id)
        posts.splice(posts.indexOf(post), 1)
        setPosts([...posts])

    }

    return (
        <div className='page'>
            <ul>
                <li><AddPost setPosts={addPost} /></li>
                {posts.map((post) => { return (<li><PostListItem post={post} removePost={removePost} /></li>) })}
            </ul>

        </div>
    )
}

export default Home