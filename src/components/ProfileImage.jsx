import { useNavigate } from 'react-router-dom';
import '../styles/ProfileImage.css'
import PropTypes from 'prop-types';

export default function ProfileImage({ user, w, h, marginL, marginR }) {
    const navigate = useNavigate();
    return (
        <div className="profileImageContainer" style={
            {
                width: w,
                minWidth: w,
                height: h,
                minHeight: h,
                marginLeft: marginL,
                marginRight: marginR,
                backgroundColor: user.favouriteColour
            }
        }
        onClick={() => navigate(`/profile/${user.id}`)}
        >
            {
                user.firstName && user.lastName ?
                    <>
                        <p>{user.firstName.toUpperCase()[0]}</p>
                        <p>{user.lastName.toUpperCase()[0]}</p>
                    </>
                    :
                    <>
                        <p>?</p>
                        <p>?</p>
                    </>
            }
        </div>
    )
}

ProfileImage.propTypes = {
    user: PropTypes.object,
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

