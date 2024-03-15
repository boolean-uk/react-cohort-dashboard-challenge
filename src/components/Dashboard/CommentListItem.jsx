import { useState,useContext, useEffect } from "react";
import ProfileImageWrapper from "../ProfileImageWrapper";
import { appCtx } from "../../App";

export default function CommentListItem({commentItem:{content, contactId}}){
const ctx = useContext(appCtx);
    const [contact, setContact] = useState()

    useEffect(()=>{
        let c = ctx.contacts.filter(c=>c.id ==contactId)
        if(c[0] != undefined){setContact(c[0])}
    })

    return(<div className="wrapper">
    {contact!== undefined? <ProfileImageWrapper firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour}/>:<ProfileImageWrapper/>}
    <div className="comment"><p>{content}</p></div></div>
    )
}