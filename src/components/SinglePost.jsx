import { useParams } from "react-router-dom"
import PostLi from "./PostLi"

export default function SinglePost({ postData, loggedInUser }) {
    const params = useParams()

    const post = postData.find(p => p.id === Number(params.id))

    return (
        <>
            {post && 
                <ul>
                    <PostLi post={post} loggedInUser={loggedInUser}/>
                </ul>
            }
        </>
    )
}