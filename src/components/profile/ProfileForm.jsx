import "../../style/profile/ProfileForm.css";
import PropTypes from "prop-types";
import ProfileSubForm from "./ProfileSubForm";
import { useState } from "react";

const ProfileForm = ({ profileId }) => {
    const submitProfile = async (event) => {
        event.preventDefault();
    };

    const [userData, setUserData] = useState({
        city: "North Arvilla",
        email: "Giles6@yahoo.com",
        favouriteColour: "#3da4d0",
        firstName: "Brando",
        gender: "Female to male",
        id: 1,
        jobTitle: "Principal Brand Planner",
        lastName: "Roberts",
        latitude: -83.4676,
        longitude: -45.6291,
        profileImage:
            "https://www.gravatar.com/avatar/Giles6@yahoo.com?s=120&d=identicon",
        street: "Muller Points",
    });

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
    profileId: PropTypes.number.isRequired,
};
