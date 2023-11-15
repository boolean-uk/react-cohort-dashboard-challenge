import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./FormSection";
import getData from "../../../js_functions/get";
import putData from "../../../js_functions/put";
import { useNavigate } from "react-router-dom";
import formSections from "../../profileFormDataStructure";


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
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    putData(`contact/${contactId}`, form, setReloadContacts, reloadContacts)
    setReloadContacts(!reloadContacts)
    navigate('/')
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
