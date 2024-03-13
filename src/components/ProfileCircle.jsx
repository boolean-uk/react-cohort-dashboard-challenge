import "../styles/Circle.css"
import { Link } from "react-router-dom"


export default function ProfileCircle({name, colour, id}) {
    const fullName = name.split(" ")
    return(
        <>
        <Link to={`/profile/${id}`} className="profile-link">
        <div className="profile-circle" style={{backgroundColor: colour}}>
            <p>
               {name}
            </p>
        </div>
        </Link>
        </>
    )
}