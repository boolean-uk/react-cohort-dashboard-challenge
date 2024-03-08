import { useContext } from "react"
import Certificate from "./Certificate"
import { InstanceContext } from "../../App"
import LoadUser from "../LoadUser"

export default function Profile() {
    const _instance = useContext(InstanceContext)
    const _currentProfile = LoadUser(_instance.userID)

    function onChangeProfile(event) {
        event.preventDefault()

        var _hasChanges = false

        for (var i = 0; i < event.target.length; i++) {
            if (event.target[i].name !== "" && _currentProfile[event.target[i].name] !== event.target[i].value) {
                _currentProfile[event.target[i].name] = event.target[i].value
                _hasChanges = true
            }
        }

        if (!_hasChanges) return

        const _profileString = JSON.stringify(_currentProfile)

        fetch(_instance.baseURL + "contact/" + _instance.userID, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: _profileString
        })

        localStorage.setItem("user_" + _instance.userID, _profileString)
    }

    return (
        <div>
            <p style={{fontSize: 32}}>Profile</p>
            <div className="post">
                <Certificate userID={_instance.userID} forceCompact />
                <form autoComplete="off" onSubmit={onChangeProfile}>
                    <p>First Name *</p>
                    <input name="firstName" type="text" defaultValue={_currentProfile.firstName} />
                    <p>Last Name *</p>
                    <input name="lastName" type="text" defaultValue={_currentProfile.lastName} />
                    <p>email *</p>
                    <input name="email" type="text" defaultValue={_currentProfile.email} />
                    <p>City</p>
                    <input name="city" type="text" defaultValue={_currentProfile.city} />
                    <p>Street</p>
                    <input name="street" type="text" defaultValue={_currentProfile.street} />
                    <p>Job Title</p>
                    <input name="jobTitle" type="text" defaultValue={_currentProfile.jobTitle} />
                    <button style={{position: "relative", float: "right"}}>Confirm Changes</button>
                </form>
            </div>
        </div>
    )
}
