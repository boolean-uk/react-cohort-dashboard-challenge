import { useParams } from "react-router-dom"
import PostLi from "./PostLi"
import { useContext } from "react"
import { DataContext } from "./MainComponent"

export default function SinglePost({ loggedInUser }) {
    const { postData } = useContext(DataContext)
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