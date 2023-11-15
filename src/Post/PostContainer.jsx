import AuthorContainer from "./AuthorContainer"
import PostText from "./PostText"


export default function PostContainer({post, reloadContacts, reloadPostList, setReloadPostList, edit, setEdit}) {
    reloadPostList
    return(
        <>
            <section>
                <AuthorContainer post={post} reloadContacts={reloadContacts}/>
                <PostText post={post} edit={edit} setEdit={setEdit} setReloadPostList={setReloadPostList} reloadPostList={reloadPostList}/>
            </section>
        </>
    )
}