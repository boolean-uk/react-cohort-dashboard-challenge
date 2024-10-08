import Content from './Posts/Content'
import { useState } from 'react'
import MakeComment from './Posts/MakeComment'
import Comments from './Posts/Comments'

// eslint-disable-next-line react/prop-types
export default function Post({ post, users, posts, setPosts }) {
    const [comments, setComments] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    // eslint-disable-next-line react/prop-types
    const [editedContent, setEditedContent] = useState(post.content)

    const handleEdit = async () => {
        try {
            // eslint-disable-next-line react/prop-types
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${post.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // eslint-disable-next-line react/prop-types
                    postId: post.id,    
                    // eslint-disable-next-line react/prop-types
                    title: post.title,    
                    // eslint-disable-next-line react/prop-types
                    contactId: post.contactId,
                    content: editedContent 
                }),
            })
    
            if (response.ok) {
                const updatedPost = await response.json()
                setPosts((prevPosts) =>
                    prevPosts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
                )
                setIsEditing(false)
            } else {
                const errorText = await response.text()
                console.error('Failed to update post:', errorText)
            }
        } catch (err) {
            console.error('ERROR:', err)
        }
    }
    

    // Handle the delete operation
    const handleDelete = async () => {
        try {
            // eslint-disable-next-line react/prop-types
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${post.id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                // eslint-disable-next-line react/prop-types
                setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id))

                setComments([]) 
            } else {
                console.error('Failed to delete post')
            }
        } catch (err) {
            console.error('ERROR:', err)
        }
    }

    const handleCancel = () => {
        setIsEditing(false)
        // eslint-disable-next-line react/prop-types
        setEditedContent(post.content)
    }

    return (
        <section>
            <Content post={post} users={users} />
            <hr />
            {isEditing ? (
                <div>
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                     {/* eslint-disable-next-line react/prop-types */}
                    <button onClick={() => { setIsEditing(true); setEditedContent(post.content) }}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
             {/* eslint-disable-next-line react/prop-types */}
            <Comments id={post.id} users={users} comments={comments} setComments={setComments} />
            {/* eslint-disable-next-line react/prop-types */}
            <MakeComment posts={posts} id={post.id} post={post} setPosts={setPosts} comments={comments} setComments={setComments} />
        </section>
    )
}
