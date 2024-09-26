import { appCtx } from "../../App"
import { useContext } from "react"

import {PostListItem} from './PostListItem'


export default function PostList(){
const ctx = useContext(appCtx)
const posts = ctx.posts?ctx.posts:[];
    return(
        <>
        {posts.map((post, index)=>  <PostListItem key={index} id={post.id} content={post.content||''} title={post.title||''} contactId ={post.contactId} />)}
        </>
        )
}