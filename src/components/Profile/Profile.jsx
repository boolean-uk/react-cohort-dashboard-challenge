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
      {Object.keys(user).map((field, index) => {
        const humanFieldNames = {
          firstName: "First Name",
          lastName: "Last Name",
          jobTitle: "Job Title"
        }
        const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
        const nonRenderFields = ["id", "latitude", "longitude"]
        if (nonRenderFields.includes(field.toLowerCase()) === false) return <FormField key={index} description={(humanFieldNames[field]||capitalize(field))} value={user[field]} type={field.type} name={field} handleChange={handleChange}/>
    })}
      <button>Submit</button>
    </form>
  )
}