import "../../style/profile/ProfileSubForm.css";
import PropTypes from "prop-types";

const ProfileSubForm = ({ className, subform, userData, setUserData }) => {
    return (
        <div className={className + " sub-form"}>
            <hr />
            <h3 className="title">{subform.title}</h3>
            {subform.inputs.map((input, i) => (
                <div key={i} className="input-container">
                    <p className="input-title">{input.title}</p>
                    <input
                        className="input"
                        type="text"
                        name={input.valueName}
                        value={userData[input.valueName]}
                        onChange={(event) => {
                            const newUserData = { ...userData };
                            newUserData[input.valueName] = event.target.value;
                            setUserData({ ...newUserData });
                        }}
                    ></input>
                </div>
            ))}
        </div>
    );
};

export default ProfileSubForm;
ProfileSubForm.propTypes = {
    className: PropTypes.string.isRequired,
    subform: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired,
};
