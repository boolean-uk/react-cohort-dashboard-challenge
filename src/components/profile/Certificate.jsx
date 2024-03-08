// this only consits of the profile picture, username and status

import PropTypes from 'prop-types'
import LoadUser from '../LoadUser'

Certificate.propTypes = {
    scale: PropTypes.number,
    status: PropTypes.node,
    userID: PropTypes.number,
    forceCompact: PropTypes.bool
}

function isInvalid(o) {
    return o === undefined || o === null
}

export default function Certificate({ status, scale, userID, forceCompact }) {
    var _username = undefined
    var _user = {
        profileImage: ""
    }
    
    if (isInvalid(scale)) scale = 1.0

    if (!isInvalid(userID)) {
        _user = LoadUser(userID)
        _username = `${_user.firstName} ${_user.lastName}`
    }

    if (forceCompact === undefined) forceCompact = false
    if (forceCompact === null) forceCompact = true

    return (
        <div className="certificate" style={{gridTemplateColumns: `${128 * scale}px ${20 * scale * (isInvalid(_username) && isInvalid(status) ? 0 : 1)}px max-content`, gridTemplateRows: `${64 * scale}px ${64 * scale}px`}}>
            <div style={{gridRowStart: 1, gridRowEnd: 3}}>
                <img style={{borderRadius: "50%"}} width={128 * scale} src={_user.profileImage} alt="noIMG" />
            </div>
            <div style={{gridRowStart: 1, gridRowEnd: 3}}></div>
            {!isInvalid(_username) && !forceCompact &&
                <p style={{fontSize: 58 * scale, position: "relative", top: -40 * scale}} className="username">{_username}</p>
            }
            {!isInvalid(status) && !forceCompact &&
                <p style={{fontSize: 30 * scale, color: "gray"}} className="status">{status}</p>
            }
        </div>
    )
}
