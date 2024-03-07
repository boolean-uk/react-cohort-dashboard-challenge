import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import "../styles/Profile.css";
import AccountSection from "../components/profile/AccountSection";
import AddressSection from "../components/profile/AddressSection";
import ContactSection from "../components/profile/ContactSection";
import JobSection from "../components/profile/JobSection";
import { UserContext } from "../App";
export const ProfileContext = createContext();

export default function Profile() {
    const { id } = useParams();
    const [profileUser, setProfileUser] = useState({});
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`)
            .then((response) => response.json())
            .then((data) => setProfileUser(data))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profileUser.firstName === "" || profileUser.lastName === "" || profileUser.email === "" || profileUser.gender === "") {
            alert("Please fill out all required fields, marked *")
            return
        }
        if (user.id === id) {
            setUser(profileUser)
        }
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileUser)
        })
            .then(() => {
                setUser(profileUser)
                navigate(`/`)
            })
    }
    return (
        <div className="profileContainer">
            {
                profileUser ?
                    <ProfileContext.Provider value={{ user: profileUser, setUser: setProfileUser }}>
                        <ProfileHeader />
                        <form className="profileContentContainer" onSubmit={(e) => handleSubmit(e)}>
                            <AccountSection />
                            <AddressSection />
                            <ContactSection />
                            <JobSection />
                            <button className="updatePostButton">Save</button>
                        </form>
                    </ProfileContext.Provider>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}