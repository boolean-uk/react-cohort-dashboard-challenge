import "./style.css";

const UserCycle = ({ name: { firstName, lastName } }) => {
    const initials = `${firstName[0]}${lastName[0]}`;

    return (
        <button className="userCycle">
            <span className="userCycle__text">{initials}</span>
        </button>
    );
};

export default UserCycle;
