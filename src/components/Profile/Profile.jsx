import { useEffect, useState } from "react"
import FormField from "./FormField"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../App"

export default function Profile ({ contactId }) {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  
  const endpoint = `/contact/${contactId}`
  
  const loadUser = () => {
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  const submitUser = () => {
    const myHeaders = {
      "content-type": "application/json"
    }

    const options = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(user)
    }

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  useEffect(loadUser, [])

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitUser()
    navigate("/")
  }

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
    <form className="profile" onSubmit={(event) => handleSubmit(event)}>
      {formFields.map((field, index) => <FormField key={index} description={field.description} value={field.value} type={field.type} name={field.name} handleChange={handleChange}/>)}
      <button>Submit</button>
    </form>
  )
}