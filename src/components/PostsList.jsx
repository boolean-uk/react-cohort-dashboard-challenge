/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { MyContext } from '../App'
import CreateNewPost from './CreateNewPost'
import PostsListItem from './PostsListItem'

export default function PostsList() {
    const context = useContext(MyContext)
    return (
        <main className="main">
        <section>
            <ul>
                <CreateNewPost/>
            </ul>
            <br/>
            <ul>
                {context.posts.toReversed().map((post, index) => (
                    <PostsListItem key={index} post={post}/>
                ))}
            </ul>
        </section>
        </main>
    )
}