import { useState, useEffect, useContext } from 'react'
import AccountIcon from "@/Components/AccountIcon/AccountIcon"
import { baseUserUrl } from '@/Utils/apiUtils'
import { ProfileEditContext, userContext } from '@/Utils/contexts'
import PropTypes from 'prop-types'
import "./ProfileInformation.css"
import ProfileInformationItem from './ProfileInformationItem/ProfileInformationItem'
import ProfileInformationColorItem from './ProfileInformationColorItem/ProfileInformationColorItem'

const ProfileInformation = ({ id }) => {
    const [user, setUser] = useState()
    const [allowEdit, setAllowEdit] = useState(false)

    const { LoggedInUser, retrieveUserDetails } = useContext(userContext)

    const retrieveUserInformation = async (id) => {
        await fetch(`${baseUserUrl}/${id}`)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
    }

    const submitUserData = async (e) => {
        e.preventDefault()
        const request = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        await fetch(`${baseUserUrl}/${id}`, request)
        await retrieveUserInformation(id)
        await retrieveUserDetails()
    }

    const handleFieldChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }


    useEffect(() => {
        setAllowEdit(LoggedInUser.id == id)
    }, [LoggedInUser, id])

    useEffect(() => {
        id && retrieveUserInformation(id)
    }, [id])

    if (!user) {return (
        <div>Loading...</div>
    )}

    return (
        <div className='profile-display-container'>
            <div className="profile-header-container">
                <AccountIcon user={user}/>
                <h3>{user.firstName} {user.lastName}</h3>
            </div>
            <ProfileEditContext.Provider 
                value={{handleFieldChange: handleFieldChange, userData: user, allowEdit: allowEdit}}
            >
            <div className='profile-header-grid'>
                <div className='profile-header-grid-item'>
                    <h3>Account info</h3>
                    <ProfileInformationItem 
                        label={"First Name"} 
                        id={"firstName"} 
                        required={true}
                    />
                    <ProfileInformationItem 
                        label={"Last Name"} 
                        id={"lastName"}
                        required={true}
                    />
                    <ProfileInformationItem 
                        label={"Email"} 
                        id={"email"}
                        required={true}
                    />
                </div>
                <div className='profile-header-grid-item'>
                    <h3>Address</h3>
                    <ProfileInformationItem 
                        label={"Street"} 
                        id={"street"} 
                    />
                    <ProfileInformationItem 
                        label={"City"} 
                        id={"city"} 
                    />
                </div>
                <div className='profile-header-grid-item'>
                    <h3>Other</h3>
                    <ProfileInformationItem 
                        label={"Job title"} 
                        id={"jobTitle"} 
                    />
                    <ProfileInformationColorItem
                        label={"Profile color"} 
                        id={"favouriteColour"} 
                    />
                </div>
            </div>
            {allowEdit && <button   className='submit-changed-profile-button'
            onClick={(e) => submitUserData(e)}
            >
                Submit
            </button>}
            </ProfileEditContext.Provider>
        </div>
    )
}

ProfileInformation.propTypes = {
    id: PropTypes.string,
}

export default ProfileInformation