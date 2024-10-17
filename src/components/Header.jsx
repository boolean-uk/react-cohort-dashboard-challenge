import Logo from "./Logo";
import '../styles/header.css'
import Avatar from "./Avatar";
import { useContext } from "react";
import { AppContext } from "../App";


export default function Header() {
   const { postWithUserData } = useContext(AppContext);

   if(!postWithUserData || postWithUserData.length === 0 ){
    return <p>Loading data</p>
   }

   const { firstName, lastName } = postWithUserData[0]

   if (!firstName || !lastName ){
    return <p>No avatar</p>
   }

    return (
        <div className="header-container">
            <Logo />
            <Avatar firstName={postWithUserData[0].firstName} lastName={postWithUserData[0].lastName}  />
        </div>
    )
}

