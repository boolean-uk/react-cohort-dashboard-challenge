import { useContext, useEffect, useState } from "react"
import { NavContext, UserContext } from "../../App"
import ProfileImage from "../ProfileImage"

export default function Profile(){
    const {user} = useContext(UserContext)
    
    const {setNavActive} = useContext(NavContext)

    const [formState, setFormState] = useState({
        firstName : user.firstName,
        lastName : user.lastName,
        username : user.username,
        email : user.email
    })

   useEffect(() => {
    setNavActive("profile")
   })

   function handleChange(e){
    setFormState({...formState, [e.target.name]:e.target.value})
   }
    
    return (
        <div className="card">
            <ProfileImage/> <h1>{`${user.firstName} ${user.lastName}` }</h1>
            <hr/>
            <form className="profile">
                <h2>Account Info</h2>
                <input type="text" name="firstName" id="firstName" value={formState.firstName} onChange={handleChange}/>
                <input type="text" name="lastName" id="lastName" value={formState.lastName} onChange={handleChange}/>
                <input type="text" name="username" id="username" value={formState.username} onChange={handleChange} placeholder="Username"/>
                <input type="text" name="email" id="email" value={formState.email} onChange={handleChange}/>
            </form>
        </div>
    )
}