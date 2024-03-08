import "../../style/profile/ProfileForm.css";
import PropTypes from "prop-types";
import ProfileSubForm from "./ProfileSubForm";
import { useContext, useEffect, useState } from "react";
import { postContext } from "../../App";

const ProfileForm = ({ owner }) => {
    const [userData, setUserData] = useState(owner);
    const { contacts, setContacts } = useContext(postContext);

    useEffect(() => {
        setUserData(owner);
    }, [owner]);

    const subforms = [
        {
            title: "Account info",
            inputs: [
                { title: "First Name*", valueName: "firstName" },
                { title: "Last Name*", valueName: "lastName" },
                { title: "Email*", valueName: "email" },
            ],
        },
        {
            title: "Address",
            inputs: [
                { title: "Street", valueName: "street" },
                { title: "City", valueName: "city" },
            ],
        },
    ];

    const submitProfile = async (event) => {
        event.preventDefault();
        if (
            owner.firstName.trim() === "" ||
            owner.lastName.trim() === "" ||
            owner.email.trim() === ""
        )
            return;

        const newUserData = { ...userData };
        delete newUserData.id;

        const postApiRequest = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserData),
        };

        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact/" + owner.id,
            postApiRequest
        );
        const data = await response.json();

        const newContacts = [...contacts];
        const userIndex = contacts.findIndex((c) => c.id === owner.id);
        newContacts[userIndex] = data;
        setContacts([...newContacts]);
    };

    return (
        <form className="profile-form" onSubmit={submitProfile}>
            <div className="parent">
                {subforms.map((subform, i) => (
                    <ProfileSubForm
                        key={i}
                        className={"div" + (i + 1)}
                        subform={subform}
                        userData={userData}
                        setUserData={setUserData}
                    />
                ))}
            </div>
            <div className="button-container">
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default ProfileForm;
ProfileForm.propTypes = {
    owner: PropTypes.object.isRequired,
};
