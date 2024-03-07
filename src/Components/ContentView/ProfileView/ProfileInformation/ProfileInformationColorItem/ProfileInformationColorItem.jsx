import "./ProfileInformationColorItem.css"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ProfileEditContext } from "@/Utils/contexts"

const ProfileInformationColorItem = ({label, id, required = false}) => {
    const { handleFieldChange, userData, allowEdit } = useContext(ProfileEditContext)
    return (
        <div className="grid-item-color-selector">
            <label>
                <span>{required ? label+"*" : label }</span><br/>
                <input 
                    type="color"
                    id={id}
                    placeholder={label}
                    step="5"
                    value={userData[id]}
                    onChange={(e) => handleFieldChange(e)}
                    disabled={!allowEdit}
                />
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

ProfileInformationColorItem.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default ProfileInformationColorItem