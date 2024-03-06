/* eslint-disable react/prop-types */
import CreateNewPost from './CreateNewPost'
import PostsListItem from './PostsListItem'

export default function PostsList(props) {
    const {posts, contacts} = props
    return (
        <main>
        <section>
            <CreateNewPost/>
            <h2>Posts</h2>
            <ul>
                {posts.toReversed().map((post, index) => (
                    <PostsListItem key={index} post={post} contacts={contacts}/>
                ))}
            </ul>
        </section>
        </main>
    )
}