/* eslint-disable react/prop-types */
import PostInfo from "./postInfo.jsx";



export default function PostFeed({users, posts, setPosts}) {

    return (
        <>
            <PostInfo users={users} posts={posts} setPosts={setPosts} />
        </>
    )
}