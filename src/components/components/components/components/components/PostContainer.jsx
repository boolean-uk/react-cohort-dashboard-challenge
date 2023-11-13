import AuthorContainer from "./components/AuthorContainer"
import PostText from "./components/PostText"


export default function PostContainer({post, reloadContacts}) {
    return(
        <>
            <section>
                <AuthorContainer post={post} reloadContacts={reloadContacts}/>
                <PostText post={post}/>
            </section>
        </>
    )
}