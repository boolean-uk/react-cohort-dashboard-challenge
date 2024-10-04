import { useEffect, useState } from 'react'
import { useContactsPosts } from '../context/ContactPostContext'
import ContactCircle from '../ContactCircle'
import Header from '../universal/Header'
import LeftMenu from '../universal/LeftMenu'
import { useNavigate, useParams } from 'react-router-dom'

export default function Profile() {
    const { contactId } = useParams()
    const { setContacts } = useContactsPosts()
    const navigate = useNavigate()
    const [contact, setContact] = useState(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        email: '',
        phone: '',
    })

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${contactId}`)
            .then((response) => response.json())
            .then((data) => {
                setContact(data)

                setFormData({
                    firstName: data.firstName || '',
                    lastName: data.lastName || '',
                    street: data.street || '',
                    city: data.city || '',
                    email: data.email || '',
                    phone: data.phone || '',
                });
            })
            .catch((error) => console.error(error))
    }, [contactId])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!contact) return

        const contactId = contact.id
    
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${contactId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update profile')
            }
    
            const updatedContact = await response.json()
            setContact(updatedContact)

            setContacts((prevContacts) => 
                prevContacts.map((currContact) => 
                    currContact.id === contactId ? updatedContact : currContact
                )
            )

            navigate('/')
    
        } catch (error) {
            console.error('Error updating profile:', error)
            alert('Failed to update profile')
        }
    }

    return (
        <div className="dashboard-container">
            <Header />

            <div className="under-container">
                <LeftMenu />
                <div className="profile-container">
                    <ContactCircle contact={contact} showName={true} />
                    <form className="profile-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Street</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="save-button">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
