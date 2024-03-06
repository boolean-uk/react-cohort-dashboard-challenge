import '../styles/ProfileImage.css'
import PropTypes from 'prop-types';

export default function ProfileImage({ imageUrl, w, h, marginL, marginR }) {
    return (
        <img src={imageUrl} style={{ width: w, height: h, marginLeft: marginL, marginRight: marginR }} alt="profile image" className="image" />
    )
}

ProfileImage.propTypes = {
    imageUrl: PropTypes.string,
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

