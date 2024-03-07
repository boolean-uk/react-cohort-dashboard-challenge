import "./styles.css";

import { useNavigate } from 'react-router-dom'
import { readableColor } from 'polished';


export default function UserIcon({ userToIcon, size }) {

    const navigate = useNavigate()

    return (
        <div 
        onClick={() =>navigate(`/profile/${userToIcon.id}`)} 
        className="circle" 
        style={{
                backgroundColor: userToIcon.favouriteColour,
                color: readableColor(userToIcon.favouriteColour !== "" ? userToIcon.favouriteColour : "#ffffff"),
                
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
                fontSize: `${size/2}px`,
            }}>
            {userToIcon.firstName.charAt(0)}
            {userToIcon.lastName.charAt(0)}
        </div>
    )
}