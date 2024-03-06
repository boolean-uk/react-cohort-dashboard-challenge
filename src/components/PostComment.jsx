/* eslint-disable react/prop-types */
//import { useEffect, useState } from "react"

export default function PostComment(props){
    const {comment} = props
    /*
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        favouriteColour: "#FFFFFF"
    })

    /*
    useEffect(() =>{
        setContact(contacts.find((x) => x.id === comment.contactId))
    }, [contact])

    if (!contact) return <p>Loading comment user author...</p>
    */
   
    return (
        <div key={comment.id}>
            <h4>{comment.contactId}</h4>
            <p>{comment.content}</p>
        </div>
    )
}