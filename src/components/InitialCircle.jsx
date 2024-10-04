/* eslint-disable react/prop-types */
import '../stylesheets/initcircle.css'

function InitialsCircle ({ firstName, lastName, color }) {
    const getInitials = (firstName, lastName) => {
        if (!firstName || !lastName) return "";
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
    };

    return (
        <div className="init-circle" style={{ backgroundColor: color || '#56ccf2' }}>
            {getInitials(firstName, lastName)}
        </div>
    );
};

export default InitialsCircle;
