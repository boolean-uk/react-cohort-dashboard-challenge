import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App'
import AccountInfoForm from './AccountInfoForm';
import AddressInfoForm from './AddressInfoform';
import "../styles/Profile.css";
import Avatar from './Avatar';
import { useParams } from 'react-router-dom';

function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [profileUser, setProfileUser] = useState({});
    const { userId } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");

    const canEdit = user && user.id === profileUser.id;

    const UserUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/';

    const fetchUser = async () => {
        try {
            const response = await fetch(`${UserUrl}${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            const fetchedUser = await response.json();
            setProfileUser(fetchedUser);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    useEffect(() => {
        fetchUser();


    }, [userId]);

    useEffect(() => {
        if (profileUser) {
            setFirstName(profileUser.firstName || "");
            setLastName(profileUser.lastName || "");
            setEmail(profileUser.email || "");
            setStreet(profileUser.street || "");
            setCity(profileUser.city || "");
        }
    }, [profileUser]);




    const handleSave = async (e) => {
        e.preventDefault();

        const updatedUser = {
            firstName,
            lastName,
            email,
            street,
            city
        };

        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                throw new Error("Failed to update user");
            }

            const result = await response.json();
            setProfileUser(result);
            setUser(result);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };


    return (
        <main >
            <section className="profile-layout">
                <h2>Profile</h2>
                <div className="profile-div">
                    <div className="user-info">
                        <div className="userAvatar">
                            {profileUser && profileUser.firstName && profileUser.lastName && (
                                <Avatar firstName={profileUser.firstName} lastName={profileUser.lastName} favouriteColour={profileUser.favouriteColour} />
                            )}
                        </div>
                        <div className="user-name">
                            {profileUser && profileUser.firstName && profileUser.lastName && (
                                <span>{profileUser.firstName} {profileUser.lastName}</span>
                            )}
                        </div>
                    </div>
                    <form onSubmit={canEdit ? handleSave : (e) => e.preventDefault()} className="forms">
                        <AccountInfoForm
                            firstName={firstName}
                            setFirstName={canEdit ? setFirstName : () => { }}
                            lastName={lastName}
                            setLastName={canEdit ? setLastName : () => { }}
                            email={email}
                            setEmail={canEdit ? setEmail : () => { }}
                            readOnly={!canEdit}
                        />
                        <div className='right-form'>
                            <AddressInfoForm
                                street={street}
                                setStreet={canEdit ? setStreet : () => { }}
                                city={city}
                                setCity={canEdit ? setCity : () => { }}
                                readOnly={!canEdit}
                            />
                            {canEdit && <button type="submit">Save</button>}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default Profile