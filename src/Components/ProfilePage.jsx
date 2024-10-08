import IconUser from './IconUser'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from "../App"
import { useParams } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ProfilePage({ update }) {
    const { loggedIn, users } = useContext(AppContext)
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [key, setKey] = useState(Date.now())

    useEffect(() => {
        if (id) {
            const selectedUser = users.find(u => u.id === parseInt(id))
            setUser(selectedUser)
        } else {
            setUser(loggedIn)
        }
    }, [id, users, loggedIn])

    const manageSubmission = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                console.error('Failed to update user!')
            } else {
                update()
                setKey(Date.now())
            }
        } catch (err) {
            console.error('ERROR: ', err)
        }
    }

    const manageText = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    if (!user) return <div>Loading...</div>

    return (
        <>
            <div className="ProfileTop">
                <h2 className="ProfileText">Profile</h2>
            </div>
            <div className="ProfileBottom">
                <div className="ProfileSurvey">
                    <div className="ProfileUser">
                        <section>
                            <IconUser user={user} />
                        </section>
                        <h2 className="ProfileName">{user.firstName} {user.lastName}</h2>
                    </div>
                    <section className="FormSection">
                        <form key={key} className="Form" onSubmit={manageSubmission}>
                            <div className="FormContent">
                                <div className="AccountInfo">
                                    <h2>Account Info</h2>
                                    <label>First Name*
                                        <input type="text" name="firstName" value={user.firstName} onChange={manageText} required />
                                    </label>
                                    <label>Last Name*
                                        <input type="text" name="lastName" value={user.lastName} onChange={manageText} required />
                                    </label>
                                    <label>Gender*
                                        <input type="text" name="gender" value={user.gender} onChange={manageText} required />
                                    </label>
                                    <label>Email*
                                        <input type="text" name="email" value={user.email} onChange={manageText} required />
                                    </label>
                                </div>
                                <div className="Address">
                                    <h2>Address</h2>
                                    <label>Street
                                        <input type="text" name="street" value={user.street} onChange={manageText} />
                                    </label>
                                    <label>City
                                        <input type="text" name="city" value={user.city} onChange={manageText} />
                                    </label>
                                </div>
                            </div>
                            <div className="SubmitButton">
                                <input className="SubmitForm" type="submit" value={"Save"} />
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}
