import {useContext, useState} from 'react'
import ProfileImageWrapper from '../ProfileImageWrapper';
import { appCtx } from '../../App';


export default function CommentForm({SaveComment}){
    let ctx = useContext(appCtx) 
    const [content, setContent] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        SaveComment(content)
        setContent('');
    }
    return(<div className='wrapper'>
        {ctx.user !== undefined?<ProfileImageWrapper firstName={ctx.user.firstName} lastName={ctx.user.lastName} favouriteColour={ctx.user.favouriteColour}/>:<div/>}
        <form className="comment-form" onSubmit={(e)=>handleSubmit(e)}>
        <div className='commentInput'>
        <input type="textarea" onChange={(e)=>setContent(e.target.value)} placeholder="write a comment" className="inline" value={content}></input>
        <button type="submit"className="inline">Comment</button></div>
    </form></div>
    )
}