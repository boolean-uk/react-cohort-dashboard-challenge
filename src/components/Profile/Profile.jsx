import { useEffect, useState, useContext } from "react"
import ProfileItem from "./ProfileItem"
import { AppContext } from "../../App";

export default function Profile(){
    const [contact, setContact] = useState(undefined)
    const { user } = useContext(AppContext)
    
    useEffect(() => {
        if (user) setContact(user)               
    }, [user])


    return(
       <>
       {contact && <ProfileItem contact={contact}/>}
       </>
    )
}