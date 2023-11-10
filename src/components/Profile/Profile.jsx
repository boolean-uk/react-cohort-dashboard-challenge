import { useEffect, useState } from "react"
import FormField from "./FormField"

export default function Profile () {
  const formFields = [
    {
      description: "First Name",
      name: "firstName",
      value: "Test",
      type: "text"
    },
    {
      description: "Last Name",
      name: "lastName",
      value: "SurnameTest",
      type: "text"
    }
  ]
  return (
    <form>
      {formFields.map((field, index) => <FormField key={index} description={field.description} value={field.value} type={field.type} name={field.name}/>)}
    </form>
  )
}