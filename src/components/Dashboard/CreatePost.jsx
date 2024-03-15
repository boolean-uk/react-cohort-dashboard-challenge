import { useContext, useState } from "react"
import { appCtx } from "../../App"
import ProfileImageWrapper from "../ProfileImageWrapper"

export default function PostForm(){
    let ctx = useContext(appCtx)

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

function handleSubmit(e){
    e.preventDefault()
    ctx.AddPost({content:content, title:title, contactId:1})
    setContent('');
    setTitle('')
}

return(<div className="container wrapper">{ctx.user !== undefined?<ProfileImageWrapper firstName={ctx.user.firstName} lastName={ctx.user.lastName} favouriteColour={ctx.user.favouriteColour}/>:<div/>}
<form onSubmit={(e)=>handleSubmit(e)} className="form">
 <div className="comment-form"><input className='' type="text" name='title' value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title"></input><br></br>           
<textarea type="textarea" className='inline' name='content' value={content} onChange={e=>setContent(e.target.value)} placeholder="What's on your mind?"/>
<button type="submit">Post</button></div>
</form></div>)
}