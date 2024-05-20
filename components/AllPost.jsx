import { useContext } from "react"
import { MyContext } from "./MyContext"
import Post from './Post'
import Comments from './Comments'

export default function allPost() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { posts, contactDetail, generateRandomColor } = useContext(MyContext)

    const backgroundColor = generateRandomColor
        
    return (
        <main>
            <Post />
            {posts.map(post => {

                const contact = contactDetail.find(contact => contact.id === post.id)
                return (
                    <div className="posts" key={post.id}>
                        <li className="list-posts" key={post.id}>
                            <div className="post-publisher">
                                <div className="user" style={{ backgroundColor }}>{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</div>
                                <div>
                                    <p>{ contact.firstName } { contact.lastName }</p><p className="post-title">{ post.title }
                                    </p>
                                </div>
                            </div>
                            <div className="post-content">{ post.content }</div>
                            <div className="comment-section">
                                <p className="logged-user">ML</p>
                                <Comments />
                            </div>
                        </li>             
                    </div>
                    )

            })}
        </main>
    )
        
}