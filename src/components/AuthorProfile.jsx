import { createContext, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StateContext } from "../App"
import MainProfileComponent from "./MainProfileComponent"

export const ProfileContext = createContext()

export default function AuthorProfile() {
    const [updateProfile, setUpdateProfile] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        street: '',
        city: '',
        latitude: '',
        longitude: '',
        jobTitle: ''
    })

    const { id } = useParams()

    const { authors, setAuthors } = useContext(StateContext)

    const findProfile = authors.find(author => author.id === Number(id))

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setUpdateProfile({
            ...updateProfile,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact/${findProfile.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: updateProfile.firstName,
                lastName: updateProfile.lastName,
                gender: updateProfile.gender,
                email: updateProfile.email,
                street: updateProfile.street,
                city: updateProfile.city,
                latitude: parseInt(updateProfile.latitude),
                longitude: parseInt(updateProfile.longitude),
                jobTitle: updateProfile.jobTitle
            })
        }).then(() => {
            setAuthors(prevAuthors => {
                const updatedAuthors = prevAuthors.map(author => {
                    if (author.id === findProfile.id) {
                        return { ...author, ...updateProfile }
                    }
                    return author
                })
                return updatedAuthors
            })
        })

        navigate('/')
    }

    return (
        <ProfileContext.Provider value={ { findProfile, handleSubmit, handleChange, updateProfile } }>
            <div className="profile-container">
                {findProfile &&
                    <>
                        <h1>Profile</h1>

                        <MainProfileComponent />
                    </>
                }
            </div>
        </ProfileContext.Provider>
    )
}