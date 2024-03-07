import { useNavigate } from 'react-router-dom';
import '../styles/ProfileImage.css'
import PropTypes from 'prop-types';

export default function ProfileImage({ user, w, h, marginL, marginR, fontSize }) {
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
            <div className='profileImageTextContainer' style={{width: w, height: h}}>
                {
                    user.firstName && user.lastName ?
                        <>
                            <p style={{ fontSize: fontSize }}>{user.firstName.toUpperCase()[0]}</p>
                            <p style={{ fontSize: fontSize }}>{user.lastName.toUpperCase()[0]}</p>
                        </>
                        :
                        <>
                            <p style={{ fontSize: fontSize }}>?</p>
                            <p style={{ fontSize: fontSize }}>?</p>
                        </>
                }
            </div>
        </div>
    )
}

ProfileImage.propTypes = {
    user: PropTypes.object,
    w: PropTypes.number,
    h: PropTypes.number,
    marginR: PropTypes.number,
    marginL: PropTypes.number,
    fontSize: PropTypes.number
}

ProfileImage.defaultProps = {
    w: 60,
    h: 60,
    marginR: 0,
    marginL: 0,
    fontSize: 25,
}

