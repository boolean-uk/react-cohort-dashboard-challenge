import "./ProfileInformationItem.css"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ProfileEditContext } from "@/Utils/contexts"

const ProfileInformationItem = ({label, id, required = false}) => {
    const { handleFieldChange, userData, allowEdit } = useContext(ProfileEditContext)
    return (
        <div>
            <label>
                <span>{required ? label+"*" : label }</span>
                <input 
                    type="text"
                    id={id}
                    placeholder={label}
                    value={userData[id]}
                    onChange={(e) => handleFieldChange(e)}
                    disabled={!allowEdit}
                />
            </label>
        </div>
    )
}

ProfileInformationItem.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default ProfileInformationItem