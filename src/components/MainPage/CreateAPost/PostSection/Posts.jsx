import Post from './Post'
import './Posts.css'
import './Post.css'

function Posts (props) {

    const { contact, posts, contactId } = props

    return (
        <div className="posts">
            <ul>
                {posts.map(post => 
                <Post 
                    key={post.id}
                    post={post} 
                    posts={posts}
                    contact={contact}
                    contactId={contactId}
                />)}
            </ul>
        </div>
    )
}

export default Posts