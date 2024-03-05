import { UserContext } from "../App"
import { useContext } from "react"
import '../styles/ProfileImage.css'
import PropTypes from 'prop-types';

export default function ProfileImage({ w, h, marginL, marginR }) {

    const { user } = useContext(UserContext);
    return (
        <img src={user.profileImage} style={{ width: w, height: h, marginLeft: marginL, marginRight: marginR }} alt="profile image" className="image" />
    )
}

ProfileImage.propTypes = {
    w: PropTypes.number,
    h: PropTypes.number,
    marginR: PropTypes.number,
    marginL: PropTypes.number
}

ProfileImage.defaultProps = {
    w: 60,
    h: 60,
    marginR: 0,
    marginL: 0
}

