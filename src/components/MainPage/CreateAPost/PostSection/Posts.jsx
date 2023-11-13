import Post from './Post'
import './Posts.css'
import './Post.css'

function Posts (props) {

    const { contact, posts } = props

    console.log("POSTSSSSS", posts);

    return (
        <div className="posts">
            <ul>
                {posts.map(post => 
                <Post 
                    key={post.id}
                    post={post} 
                    contact={contact}
                />)}
            </ul>
        </div>
    )
}

export default Posts