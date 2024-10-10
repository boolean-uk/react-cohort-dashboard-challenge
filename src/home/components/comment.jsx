import Profile_Icon from "../../header/components/profile_icon"
import Comment_Text from "./comment_text"
export default function Comment({comment}){

    console.log(comment.user)
    return (
        <div className="comment">
            <Profile_Icon user={comment.user}/>
            &nbsp; 
            
            <Comment_Text comment={comment}/>
            

        </div>
        
        
    )
}