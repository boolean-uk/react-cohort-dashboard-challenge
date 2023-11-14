import AuthorContainer from "./AuthorContainer"
import PostText from "./PostText"


export default function PostContainer({post, reloadContacts, reloadPostList}) {
    reloadPostList
    return(
        <>
            <section>
                <AuthorContainer post={post} reloadContacts={reloadContacts}/>
                <PostText post={post}/>
            </section>
        </>
    )
}