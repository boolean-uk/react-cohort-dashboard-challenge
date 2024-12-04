import PropTypes from 'prop-types';

function InitialsProfileIcon({ initials, color }) {
    return (
        <div style={{
            borderRadius: "75px",
            width: "70px",
            height: "70px",
            fontSize: "25px",
            backgroundColor: color,
            color: "#000046",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            display: "flex"
        }}>
            <p>{initials}</p>
        </div>
    )
}

export default InitialsProfileIcon;

InitialsProfileIcon.propTypes = {
    initials: PropTypes.string,
    color: PropTypes.string
}