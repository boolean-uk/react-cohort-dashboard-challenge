import { appCtx } from "../../App"
import { useContext, useState, useEffect} from "react"
import ProfileImageWrapper from "../ProfileImageWrapper"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
import { Link} from "react-router-dom"



function PostListItem({ id, title, content, contactId}){
    let ctx = useContext(appCtx);
    const [contact, setContact] = useState()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState()
    const getUrl = 'https://boolean-api-server.fly.dev/carob16/post/'+id+'/comment';

    useEffect(()=>{
        AddComment();
        getComments();
    },[newComment])

    
        if(!contact && contactId!== undefined){let contact = ctx.contacts.filter(c=>c.id == contactId); setContact(contact[0]);}

    async function getComments(){
        let response = await fetch(getUrl)
        let data = await response.json();
        setComments(data)
    }

async function AddComment(content){
    if(content == undefined) return;
    let url = 'https://boolean-api-server.fly.dev/carob16/post/'+id+'/comment'
    const model = {postId:Number(id),content:content,contactId:ctx.user.id }
    
  try {
      const response = await fetch( url,
      { method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(model),
        });
      const json = await response.json();
      setNewComment(json)
      
  } catch (error) {
      console.error(error);
  }
}

    
    return(
        <>
        <article className="container">
        {contact !== undefined? <div className="wrapper"><ProfileImageWrapper firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour}/>
       <div><h2 style={{marginBottom:'10px'}}>{contact.firstName} {contact.lastName}</h2><p></p><Link to={`/post/${id}`}><p>{title ||''}</p></Link></div> </div>
        :
        <ProfileImageWrapper firstName={'X'} lastName={'X'} />
        }
        
        
        <div className=" post">
            <div><p>{content||''}</p></div>
            
                <CommentList comments={comments}/>
                <hr/>
                <CommentForm SaveComment={(content)=>AddComment(content)}/>
            
            </div>
         
    </article>
            
        </>
        )
}


export { PostListItem}