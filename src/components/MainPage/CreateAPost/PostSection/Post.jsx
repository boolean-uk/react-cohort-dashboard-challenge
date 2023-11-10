import { useEffect, useState } from "react"

function Post (props) {

    const { post } = props

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
            <div className="post-header">
                <div className="poster-name">
                    <h3>{initials}</h3>
                </div>
                <h4>{contact.firstName + " " + contact.lastName}</h4>
                <h5>{post.title}</h5>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </li>
    )
}

export default Post