import { useState, useEffect } from "react";


function Comments(props) {
  
  const { comment } = props

  const contactId = comment.contactId

  const [contact, setContact] = useState({})

  const userName = "LAVINIABENZAR"
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
      <div className = "comment">
          <div className = "commenter-icon">
              <h3>{initials}</h3>
          </div>
          <div className = "comment-content">
              <h4>{contact.firstName + " " + contact.lastName}</h4>
              <h4>{comment.title}</h4>
              <p>{comment.content}</p>
          </div>
      </div>
  )
}


export default Comments;

