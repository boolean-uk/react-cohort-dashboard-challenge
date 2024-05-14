import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function CommentSection ({post}) {
    const [comments, setComments] = useState([])
    const url = `https://boolean-api-server.fly.dev/MrStashy/post/${post.id}/comment`

    useEffect(() => {
        getComments()
    }, [])

    const getComments = async () => {
        const data = await fetch(url)
        const json = await data.json()
        setComments(json)
    }

   
    return (
        <section className="flex flex-col gap-2 m-2">
        {comments.map((comment, index) => {
            return (
                <Comment key={index} comment={comment}/>
            )
        })}
        </section>
    )
}