import { useState } from "react"

export default function ProfileCircle({initials, color}){
    const [letters, setLetters] = useState([initials])
    return(
        <h2 className='roundInitials' style={{backgroundColor: color}}>{initials.toUpperCase()}</h2>
    )
}