import React from "react"
import '../../styling/avatar.css'
import { useUser } from "../../contexts/UserContext";

interface AvatarProps {
    username?: string;
    backgroundColor?: string;
    customClassname?: string;
}

const Avatar = ({ username, backgroundColor, customClassname }: AvatarProps) => {
    const { user } = useUser();

    const getInitials = (str: string) => {
        const [firstName, lastName] = str.split(' ');
        return firstName.charAt(0).toLocaleUpperCase() + lastName.charAt(0).toLocaleUpperCase();
    }

    if (!user) return <div>Loading user...</div>

    const showUserInitials = () => {
        if (username) {
            return getInitials(username);
        } 
        else {
            return getInitials(user.firstName + " " + user.lastName);
        }
    }

    return (
        <div className="avatar-container">
            <div 
                className={`circle-background ${customClassname ? customClassname : ''}`} 
                style={{ backgroundColor: backgroundColor ? backgroundColor : user.favouriteColour }}
            >
                { showUserInitials()}
            </div>
        </div>
    )
}

export default Avatar;