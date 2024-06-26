import { useLocation, useParams } from "react-router-dom";
import Author from "./Author";
import Comment from "./Comment";
import { useContext } from "react";
import { StateContext } from "../App";

export default function Post() {
    const { posts } = useContext(StateContext)
    
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id)

    const { id } = useParams()

    const location = useLocation()

    const postFound = id ? sortedPosts.find(post => post.id === Number(id)) : null
    
    if (postFound) {
        return (
            <main className="post-found">
                <article key={postFound.id}>
                    <Author post={postFound} />

                    <p>{postFound.content}</p>

                    <div id="separator"></div>

                    <Comment post={postFound} />
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
                {sortedPosts && sortedPosts.map(post => 
                    <article key={post.id}>
                        <Author post={post} />
    
                        <p>{post.content}</p>
    
                        <div id="separator"></div>
    
                        <Comment post={post} />
                    </article>
                )}
            </>
        )
    }
}