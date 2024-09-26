import { useEffect, useState } from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList(props){
    const {comments} = props; 
    const [viewAllStatus, setStatus] = useState(false);

    let arrayOflastThree = false;
    if(comments.length>3)arrayOflastThree = comments.slice(Math.max(comments.length -3, 0));
    let button = <button onClick={()=>toggleView()}>{viewAllStatus?'Hide Comments':'See Previous Comments'}</button>
    

    function toggleView(){
        viewAllStatus? setStatus(false):setStatus(true);
        button = <button onClick={()=>toggleView()}>{viewAllStatus?'Hide Comments':'See Previous Comments'}</button>
    }

if(comments !== undefined){
   
    return(<>
        <div>
            <hr/>
            {(comments.length>3)? button:<></>}
        {(comments.length>3) && viewAllStatus==false?arrayOflastThree.map((comment,index)=>(
            <CommentListItem key={index} commentItem={comment}/>)):<div></div>}
        {comments !== undefined && viewAllStatus==true?comments.map((comment,index)=>(
            <CommentListItem key={index} commentItem={comment}/>)):<div></div>}
        {(comments.length<=3)?comments.map((comment,index)=>(
            <CommentListItem key={index} commentItem={comment}/>)):<div></div>}
           
        </div>
     </>
    )}
}