import PostForm from "../Dashboard/Dashboard_components/PostListHeader_Components/PostForm"

export default function PostText({post, edit, setEdit, reloadPostList, setReloadPostList}) {

    return(
        <>
            <div>
               {edit? <PostForm  edit={edit} setEdit={setEdit} post={post} reloadPostList={reloadPostList} setReloadPostList={setReloadPostList}/>: <p>{post.content}</p>}
            </div>
        </>
    )
}