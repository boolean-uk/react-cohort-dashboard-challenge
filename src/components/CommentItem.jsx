import { useEffect, useState } from "react"
import Avatar from "./Avatar";
import "../styles/commentitem.css"


export default function CommentItem({comment}) {

    const [commentAuthor, setCommentAuthor] = useState([]);

    console.log(commentAuthor)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const responsedata = await fetch(`https://boolean-uk-api-server.fly.dev/alihaiderkhaaan/contact/${comment.contactId}`)
                const jsondata = await responsedata.json()
               // console.log(JSON.stringify(jsondata, null, 2));
                setCommentAuthor(jsondata);
            }
            catch(error){
                console.error("Error while fetching the comments", error);
            }
        }
        fetchdata();

    }, [comment]);

    return (
        <>

        <div className="comment-item">
            <div className="author-initials">
                <Avatar color={commentAuthor.favouriteColour} firstName={commentAuthor.firstName} lastName={commentAuthor.lastName} />
            </div>
        <div className="comment-content">
            <p>{commentAuthor.firstName} {commentAuthor.lastName}</p>
            <p>{comment.content}</p>
        </div>
        </div>
        
        
        </>
    )



  //  console.log(comment)

    

    

    

}