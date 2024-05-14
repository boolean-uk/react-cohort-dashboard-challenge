import InitialIcon from "./InitialIcon"
import { useState, useEffect } from "react"
export default function Comment ({ comment }) {
  
 const [commentator, setCommentator] = useState()

 useEffect(() => {
    getCommentator()
 }, [])

 const getCommentator = async () => {
    const data = await fetch (`https://boolean-api-server.fly.dev/MrStashy/contact/${comment.contactId}`)
    const json = await data.json()
    setCommentator(json)
 }

    return (
        <article className="flex flex-row gap-3 place-items-center">
            <InitialIcon user={commentator}/>
            <p className="bg-inputGrey p-2 rounded-md ">{comment.content}</p>
        </article>
    )
}