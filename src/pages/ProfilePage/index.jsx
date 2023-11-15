import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

// components
import UserCycle from "../../components/UserCycle";
import InputElement from "../../components/InputElement";

// api
import { changeContactData, getContact } from "../../utilities/api";

const ProfilePage = ({ setPage, getMainContact }) => {
    const [user, setUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    // userInfo
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userGender, setUserGender] = useState("");
    const [userStreet, setUserStreet] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userJobTitle, setUserJobTitle] = useState("");

    const { id } = useParams();

    const getUser = () => {
        getContact(parseInt(id)).then((data) => {
            setUser(data);
            setUserFirstName(data.firstName);
            setUserLastName(data.lastName);
            setUserEmail(data.email);
            setUserGender(data.gender);
            setUserStreet(data.street);
            setUserCity(data.city);
            setUserJobTitle(data.jobTitle);
        });
    };

    useEffect(() => {
        setPage("profile");
        getUser();
        setIsEdit(false);
    }, [id]);

    // functions

    const submitUserChange = (e) => {
        e.preventDefault();
        changeContactData(id, {
            firstName: userFirstName,
            lastName: userLastName,
            street: userStreet,
            city: userCity,
            gender: userGender,
            email: userEmail,
            jobTitle: userJobTitle,
            latitude: user.latitude,
            longitude: user.longitude,
        }).then(() => {
            getUser();
            getMainContact();
        });

        setIsEdit(false);
    };

    return (
        <div className="profilePage">
            <h2 className="profilePage__title">Profile</h2>

            <form onSubmit={submitUserChange} className="profilePage__content">
                <div className="profilePage__user">
                    {Object.keys(user).length > 0 && (
                        <>
                            <UserCycle
                                name={{
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                }}
                                userId={user.id}
                            />
                            <h3 className="profilePage__user-name">
                                {user.firstName} {user.lastName}
                            </h3>
                            {!isEdit ? (
                                <div
                                    className="profilePage__user-button"
                                    onClick={() => setIsEdit(true)}
                                >
                                    Edit
                                </div>
                            ) : (
                                <button
                                    className="profilePage__user-button"
                                    type="submit"
                                >
                                    Save
                                </button>
                            )}
                        </>
                    )}
                </div>
                <div className="profilePage__info">
                    <div className="profilePage__block">
                        <h3 className="profilePage__block-title">
                            Account Info
                        </h3>
                        <label className="profilePage__block-item">
                            <span>First Name*</span>
                            {!isEdit ? (
                                <p>{userFirstName}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your first name?"
                                    value={userFirstName}
                                    setValue={setUserFirstName}
                                />
                            )}
                        </label>
                        <label className="profilePage__block-item">
                            <span>Last Name*</span>
                            {!isEdit ? (
                                <p>{userLastName}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your last name?"
                                    value={userLastName}
                                    setValue={setUserLastName}
                                />
                            )}
                        </label>
                        <label className="profilePage__block-item">
                            <span>Gender</span>
                            {!isEdit ? (
                                <p>{userGender}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your gender?"
                                    value={userGender}
                                    setValue={setUserGender}
                                />
                            )}
                        </label>
                        <label className="profilePage__block-item">
                            <span>Email*</span>
                            {!isEdit ? (
                                <p>{userEmail}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your email?"
                                    value={userEmail}
                                    setValue={setUserEmail}
                                />
                            )}
                        </label>
                    </div>
                    <div className="profilePage__block">
                        <h3 className="profilePage__block-title">Address</h3>
                        <label className="profilePage__block-item">
                            <span>Street</span>
                            {!isEdit ? (
                                <p>{userStreet}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your street?"
                                    value={userStreet}
                                    setValue={setUserStreet}
                                />
                            )}
                        </label>
                        <label className="profilePage__block-item">
                            <span>City</span>
                            {!isEdit ? (
                                <p>{userCity}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your city?"
                                    value={userCity}
                                    setValue={setUserCity}
                                />
                            )}
                        </label>
                    </div>
                    <div className="profilePage__block">
                        <h3 className="profilePage__block-title">
                            Company Info
                        </h3>
                        <label className="profilePage__block-item">
                            <span>Job Title</span>
                            {!isEdit ? (
                                <p>{userJobTitle}</p>
                            ) : (
                                <InputElement
                                    placeholder="What is your job title?"
                                    value={userJobTitle}
                                    setValue={setUserJobTitle}
                                />
                            )}
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
