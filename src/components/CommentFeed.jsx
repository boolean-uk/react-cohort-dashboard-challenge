 import CommentItem from "./CommentItem"

export default function CommentFeed ({postComments}) {

    console.log(postComments)

   // if (!Array.isArray(postComments)) return <>No comments</>
    
    return (
        <>

        {postComments.map(comment => (
            <CommentItem comment={comment} key={comment.id} />
        ) )}
        
        
        </>
    ) 
} 