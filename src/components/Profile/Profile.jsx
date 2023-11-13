import { useEffect, useState } from "react"
import FormField from "./FormField"

export default function Profile ({ contactId }) {

  const [user, setUser] = useState(null)
  const loadUser = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const endpoint = `/AllyDouillette/contact/${contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])

  if (!user) return

  const formFields = [
    {
      description: "First Name",
      name: "firstName",
      value: user.firstName,
      type: "text"
    },
    {
      description: "Last Name",
      name: "lastName",
      value: user.lastName,
      type: "text"
    },
    {
      description: "Street",
      name: "street",
      value: user.street,
      type: "text"
    },
    {
      description: "City",
      name: "city",
      value: user.city,
      type: "text"
    }
  ]
  return (
    <form>
      {formFields.map((field, index) => <FormField key={index} description={field.description} value={field.value} type={field.type} name={field.name}/>)}
    </form>
  )
}