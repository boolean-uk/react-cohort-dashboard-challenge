import { useEffect, useState } from "react"

function Post (props) {

    const { post } = props

    console.log(post)

    const [contact, setContact] = useState({})

    const contactId = post.contactId
    const userName = "TomEastwood"
    const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
    const endpointForContacts = `/contact/${contactId}`

    useEffect(() => {
        fetch(baseUrl + endpointForContacts)
            .then(res => res.json())
            .then(data => setContact(data))
    } , [])

    if(!contact) {
        return <div>
                <h3>LOADING</h3>
                </div>
    } 

    const initials = contact.firstName?.charAt(0) + contact.lastName?.charAt(0)
    
    return (
        <li>
            <h3>{initials}</h3>
            <h4>{contact.firstName + " " + contact.lastName}</h4>
            <p>{post.title}</p>
            <p>{post.content}</p>
        </li>
    )
}

export default Post