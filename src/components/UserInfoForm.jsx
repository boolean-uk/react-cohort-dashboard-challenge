import { AppContext } from "../App"
import AccountInfo from "./Forms/AccountInfo"
import AddressInfo from "./Forms/AddressInfo"
import WorkInfo from "./Forms/WorkInfo"
import { createContext, useContext, useEffect, useState } from "react"
export const FormContext = createContext()

function UserInfoForm({user}) {
    const initialFormData = {
        id: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        jobTitle: "",
        street: "",
        city: "",
        latitude: 0,
        longitude: 0,
        favouriteColour: "",
        profileImage: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const { setUser, authors, setAuthors } = useContext(AppContext)

    useEffect(() => {
        if (user) {
            setFormData(user)
        }
    }, [user])

    const handleChange = (event) => {
        const {name, value } = event.target 
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Update the existing contact...
        const newContacts = authors.map((c) => {
            if (c.id === Number(user.id)) {
                return formData
            } else {
                return c
            }
        })

        // Update the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/contact/${user.id}`, {
            method: "PUT",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        // Set the new contacts...
        setAuthors(newContacts)
        // IF this was user with id 1.. update user...
        if (user.id === 1) setUser(formData)
    }


    return (
        <>
            <div className="userInfoDiv">
                <FormContext.Provider
                value={{ formData:formData, handleChange:handleChange }}
                >
                    <AccountInfo/>
                    <AddressInfo/>
                    <WorkInfo/>
                </FormContext.Provider>
            </div>
            <button onClick={handleSubmit}>Save</button>
        </>
    )
}

export default UserInfoForm