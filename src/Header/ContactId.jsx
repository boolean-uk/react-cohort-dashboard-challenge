import { useState, useEffect } from "react"



function ContactId({ post }) {

    const [contact, setContact] = useState({})



    const user = post.contactId
    const URL2 = `https://boolean-api-server.fly.dev/LAVINIABENZAR/CONTACT/${user}`


    useEffect(() => {
        fetch(URL2)
         .then((res) => res.json())
         .then((data) => setContact(data))
}, [user, URL2])

const initials = contact.firstName?.charAt(0) + contact.lastName?.charAt(0)


    return(
       <div>
     
        <p> <span>{initials}</span> {contact.firstName + " " + contact.lastName}</p>

       </div>
    )
}

export default ContactId