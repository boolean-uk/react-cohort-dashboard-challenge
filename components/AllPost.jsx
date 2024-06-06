import { useContext, useEffect } from "react"
import { MyContext } from "./MyContext"
import Post from './Post'
import Comments from './Comments'

export default function allPost({ allComments, setAllComments }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { posts, contactDetail, generateRandomColor } = useContext(MyContext)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchComments = async (postId) => {
          const response = await fetch(`https://boolean-api-server.fly.dev/homonoviscoding/post/${postId}/comment`)
          const commentsData = await response.json()
    
          // Update allComments state
          setAllComments(prevComments => ({
            ...prevComments,
            [postId]: commentsData
          }))
        }
    
        // Fetch comments for each post
        for (const post of posts) {
          fetchComments(post.id)
        }
      }, [posts, setAllComments])
    
      const backgroundColor = generateRandomColor()
      
        
    return (
        <main>
            <Post />
            {posts.map(post => {

                const contact = contactDetail.find(contact => contact.id === post.contactId)
                
                const comments = allComments[post.id] !== undefined ? allComments[post.id] : []
                return (
                    <div className="posts" key={post.id}>
                        <li className="list-posts" key={post.id}>
                            <div className="post-publisher">
                                <div className="user" style={{ backgroundColor }}>{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</div>
                                <div>
                                    <p>{contact.firstName} {contact.lastName}</p><p className="post-title">{ post.title }
                                    </p>
                                </div>
                            </div>
                            <div className="post-content">{ post.content }</div>
                            <div className="all-comments">
                                <div className="see-previous">see previous comments</div>
                            {comments.map(comment => (
                                
                                <li key={comment.id}>
                                    <div className="user" style={{ backgroundColor }}>{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</div>
                                    <div className="comm-content"><strong></strong><p> { comment.content } </p></div>
                                </li>
                            ))}
                            </div>
                            <div className="comment-section">
                                <p className="logged-user">{contactDetail[0].firstName.charAt(0)}{contactDetail[0].lastName.charAt(0)}</p>
                                <Comments />
                            </div>
                        </li>             
                    </div>
                    )

            })}
        </main>
    )
        
}