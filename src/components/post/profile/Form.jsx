
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProfileSubForm from "./ProfileSubForm";
import { BaseURL } from "../../../App";




const Form = ({ owner }) => {
    const submitProfile = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(BaseURL + /contact/ + owner.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            console.log('Data saved successfully');
            setEditMode(false);
        } catch (error) {
            console.error('Error saving data:', error.message);
        }
    };
   
    const [userData, setUserData] = useState(owner);

    useEffect(() => {
        setUserData(owner);
    }, [owner]);
   

    const [editMode, setEditMode] = useState(false);
    

    useEffect(() => {
        setUserData(owner);
    }, [owner]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
   

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
                        editMode={editMode}
                    />
                ))}
            </div>
            
            <div className="button-container">
                {!editMode && (
                    <button type="button" onClick={toggleEditMode}>
                        Edit
                    </button>
                )}
                {editMode && <button type="submit">Save</button>}
            </div> 
        </form>
    );
};

export default Form;
Form.propTypes = {
    owner: PropTypes.object.isRequired,
};