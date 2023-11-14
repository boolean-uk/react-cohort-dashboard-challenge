import { useEffect, useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import { get, postURL } from "../client"

export default function CommentContent(users, posts, postInfo) {

    console.log(postInfo)

    const [Comments, setComments] = useState()

    useEffect(()=>{
        if (postInfo){
        get(`${postURL}/${postInfo.id}/comment`)
        .then(data => setComments(data))
    }
    }, [])

    const userId = "1"

return ( Comments && (
<>
<div className="commentGrid">
                <ProfileLogo id={userId}/>
                <section className="comment">
                    <h3>{Comments.contactId}</h3>
                    <p>{Comments.comment}</p>
                </section>
            </div>
</>
))
}