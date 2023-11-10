import AuthorContainer from "./components/AuthorContainer"
import PostText from "./components/PostText"


export default function PostContainer({post}) {
    return(
        <>
            <section>
                <AuthorContainer post={post}/>
                <PostText post={post}/>
            </section>
        </>
    )
}