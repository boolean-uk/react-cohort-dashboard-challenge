import { useLocation, useParams } from "react-router-dom";
import AddComment from "./AddComment";
import Author from "./Author";
import Comment from "./Comment";

export default function Post(props) {
    const { randomAuthor, posts, authors } = props

    const { id } = useParams()

    const location = useLocation()

    const postFound = id ? posts.find(post => post.id === Number(id)) : null
    
    if (postFound) {
        return (
            <main>
                <article key={postFound.id}>
                    <Author
                        post={postFound} 
                        authors={authors}
                    />

                    <p>{postFound.content}</p>

                    <div id="separator"></div>

                    <Comment 
                        post={postFound} 
                        authors={authors}
                    />
                
                    <AddComment 
                        post={postFound} 
                        randomAuthor={randomAuthor} 
                    />
                </article>
            </main>
        )
    } else if (!postFound && location.pathname.length > 1) {
        return (
            <main id="not-found">
                <article>
                    <p>The post was not found, please go back to the home page.</p>
                </article>
            </main>
        )
    } else {
        return (
            <>
                {posts && posts.map(post => 
                    <article key={post.id}>
                        <Author
                            post={post} 
                            authors={authors}
                        />
    
                        <p>{post.content}</p>
    
                        <div id="separator"></div>
    
                        <Comment 
                            post={post} 
                            authors={authors}
                        />
    
                        <AddComment 
                            post={post} 
                            randomAuthor={randomAuthor} 
                        />
                    </article>
                )}
            </>
        )
    }
}
