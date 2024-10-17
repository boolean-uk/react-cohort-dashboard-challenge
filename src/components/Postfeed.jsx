import { useContext } from "react";
import { AppContext } from "../App";
import PostItem from "./PostItem"
import '../styles/postfeed.css';

export default function Postfeed () {

    const { postWithUserData } = useContext(AppContext);
    

    return (
        
        <div className="post-list">
            {postWithUserData.slice().reverse().map(post => (
               <PostItem key={post.id} post={post} /> 
            ))}
        </div>
            
        
    )
}