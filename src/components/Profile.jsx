import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Profile(){
    const [contact, setContact] = useState(null)
    const {id} = useParams()

    const getContacts = async() => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/FredrikEH/contact/${id}`)
        const data = await response.json()
        setContact(data)
    }

    useEffect(() => {
        getContacts();
    }, []);

    if(!contact){
        return(
            <p>Loading....</p>
        )
    }

    return(
        <div>
            <h2>Profile</h2>
            <form>
                <h2>{contact.firstName.charAt(0)} {contact.lastName.charAt(0)} {contact.firstName} {contact.lastName}</h2>
                <h2>Account info</h2>
                <ul>
                    <li>
                        <p>First name*</p>
                        <input type="text" placeholder="First Name" value={contact.firstName}/>
                    </li>
                    <li>
                        <p>Last name*</p>
                        <input type="text" placeholder="Last Name" value={contact.lastName}/>
                    </li>
                    <li>
                        <p>Email*</p>
                        <input type="email" placeholder="Email" value={contact.email}/>
                    </li>
                    
                </ul>

                <h2>Address</h2>
                <ul>
                    <li>
                        <p>Street</p>
                        <input type="text" placeholder="Street" value={contact.street}/>
                    </li>
                    <li>
                        <p>City</p>
                        <input type="text" placeholder="City" value={contact.city}/>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Profile