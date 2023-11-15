import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import { colors } from "../utilities/colors";

const UserCycle = ({ name: { firstName, lastName }, userId }) => {
    const initials = `${firstName[0]}${lastName[0]}`;
    const [userColor, setUserColor] = useState("");

    useEffect(() => {
        setUserColor(
            colors.find((item) => item.letter === firstName[0].toUpperCase())
                .color
        );
    }, [firstName]);

    return (
        <Link
            to={`/profile/${userId}`}
            className="userCycle"
            style={{ backgroundColor: userColor }}
        >
            <span className="userCycle__text">{initials}</span>
        </Link>
    );
};

export default UserCycle;
