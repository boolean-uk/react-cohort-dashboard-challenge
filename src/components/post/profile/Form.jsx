
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import ProfileSubForm from "./ProfileSubForm";

const Form = ({ owner }) => {
    const submitProfile = async (event) => {
        event.preventDefault();
    };

    const [userData, setUserData] = useState(owner);

    useEffect(() => {
        setUserData(owner);
    }, [owner]);
    const subforms = [
        {
            title: "Account info",
            inputs: [
                { title: "First Name", valueName: "firstName" },
                { title: "Last Name", valueName: "lastName" },
                { title: "Email", valueName: "email" },
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

export default Form;
Form.propTypes = {
    owner: PropTypes.object.isRequired,
};