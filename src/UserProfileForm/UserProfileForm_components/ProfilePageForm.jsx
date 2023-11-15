import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./FormSection";
import getData from "../../../js_functions/get";
import putData from "../../../js_functions/put";

const formSections = [
  {
    title: "Account info",
    inputFields: [
        {label: "First Name",
        name: "firstName",
        required: true},
        {label: "Last Name",
        name: "lastName",
        required: true},
        {label: "User Name",
        name: "userName",
        required: true},
        {label: "Email",
        name: "email",
        required: true}
    ],
  },
  {
    title: "Address",
    inputFields:  [
        {label: "Street",
        name: "street",
        required: false},
        {label: "Street Number",
        name: "streetNumber",
        required: false},
        {label: "City",
        name: "city",
        required: false},
        {label: "Zip Code",
        name: "zipCode",
        required: false}
    ],
  },
  {
    title: "Contact info",
     inputFields: [
        {label: "Phone",
        name: "phone",
        required: true},
        {label: "Website",
        name: "website",
        required: false},
        {label: "User Name",
        name: "userName",
        required: false},
        {label: "Email",
        name: "email",
        required: false}
    ],
  },
  {
    title: "Company info",
    inputFields: [
        {label: "Name",
        name: "companyName",
        required: false},
        {label: "Catch Phrase",
        name: "catchPhrase",
        required: false}, 
        {label: "Job Title", 
          name: "jobTitle", 
          required: false},
        {label: "Business Statement",
        name: "businessStatement",
        required: false}
    ],
  },
]

const initialForm = {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        street: "",
        city: "",
        id: "",
        streetNumber: "",
        userName: "",
        zipCode: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        businesStatement: ""
}


export default function ProfilePageForm( {setReloadContacts, reloadContacts} ) {
  const [form, setForm] = useState(initialForm)

  const contactId = useParams().id

  const handleSubmit = (e) => {
    e.preventDefault()
    putData(`contact/${contactId}`, form, setReloadContacts, reloadContacts)
    setReloadContacts(!reloadContacts)
  }

  useEffect(() => getData(`contact/${contactId}`,setForm), [contactId])

  return (
    <>
      <form className="profile-form">{
        formSections.map((section, index) => (
            <FormSection key={index} section ={section} form={form} setForm={setForm}/>
        ))
      }
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
