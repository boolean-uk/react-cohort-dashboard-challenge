import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

export default function ProfilePage() {
    const {id} = useParams()
    const [profile, setProfile] = useState(null)

    useEffect(()=>{
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact/${id}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile: ', error))
    }, [id])

    if (!profile) return <p>Loading profile...</p>

    return (
        <main className="post">
        <h2>Profile</h2>
            <div className="card">
            <div className="profile-image">
                <ProfilePicture firstName={profile.firstName} lastName={profile.lastName} favouriteColour={profile.favouriteColour} />
            </div>
            <h2>{profile.firstName} {profile.lastName}</h2>
                <div className="profile">
                <div className="profile-info">
                    <h3>Account info</h3>
                    <p>First Name*</p>
                    <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    readOnly
                    />
                    <p>Last Name*</p>
                    <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    readOnly
                    />
                    <p>Gender*</p>
                    <input
                    type="text"
                    name="gender"
                    value={profile.gender}
                    readOnly
                    />
                    <p>Email*</p>
                    <input
                    type="text"
                    name="email"
                    value={profile.email}
                    autoComplete="email"
                    readOnly
                    />
                    <p>Job Title*</p>
                    <input
                    type="text"
                    name="jobTitle"
                    value={profile.jobTitle}
                    readOnly
                    />
                    </div>
                <div className="profile-info">
                    <h3>Address</h3>
                    <p>Street</p>
                    <input
                    type="text"
                    name="street"
                    value={profile.street}
                    readOnly
                    />
                    <p>City</p>
                    <input
                    type="text"
                    name="city"
                    value={profile.city}
                    readOnly
                    />
                    <p>Location*</p>
                    <input
                    type="text"
                    name="location"
                    value={`${profile.latitude} ${profile.longitude}`}
                    readOnly
                    />
                    </div>
                </div>
                <br/>
                <Link to="/"><button>Save</button></Link>
            </div>
        </main>
    )
}