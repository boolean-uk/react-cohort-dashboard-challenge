import "./style.css";

import { colors } from "../utilities/colors";
import { useEffect, useState } from "react";

const UserCycle = ({ name: { firstName, lastName } }) => {
    const initials = `${firstName[0]}${lastName[0]}`;
    const [userColor, setUserColor] = useState("");

    useEffect(() => {
        setUserColor(
            colors.find((item) => item.letter === firstName[0].toUpperCase())
                .color
        );
    }, [firstName]);

    return (
        <div className="userCycle" style={{ backgroundColor: userColor }}>
            <span className="userCycle__text">{initials}</span>
        </div>
    );
};

export default UserCycle;
