import { useContext, useEffect, useState } from "react"
import { Post, PostContext } from "../../../App"
import PostListItem from "./PostListItem"

export default function PostList(props: { id: string }) {
    const [profilePosts, setProfilePosts] = useState<Post[]>([])
    const { posts } = useContext(PostContext)


    useEffect(() => {
        if (posts && props.id) {
            if (props.id === undefined) {
                throw new Error("ERROR: No id found")
            }
            const matchingPosts = posts.filter((post) => post.contactId == parseInt(props.id))
            setProfilePosts(matchingPosts)
        }
    }, [posts, props.id])

    return (
        <div className="flex flex-col gap-4">
            {profilePosts.map((post) => (
                <PostListItem key={post.id} post={post} />
            ))}
        </div>
    )
}
