import { useContext, useEffect } from "react"
import { NavContext, UserContext } from "../../App"

export default function Profile(){
    const {user} = useContext(UserContext)
    
    const {setNavActive} = useContext(NavContext)

   useEffect(() => {
    setNavActive("profile")
   })
    
    return (
        <div className="card">
            <section className="profile">
                <h1>{`${user.firstName} ${user.lastName}` }</h1>
            </section>
        </div>
    )
}