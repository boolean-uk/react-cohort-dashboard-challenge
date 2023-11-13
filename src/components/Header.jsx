import UserInitials from "./components/components/components/components/components/components/UserInitials"
import { useState, useEffect} from "react"
 

export default function Header({mockLoggedInUserId, reloadContacts}) {
    reloadContacts
    console.log(reloadContacts)
    return(
        <>
            <header className="main-header">
                <div>
                    <img src="../../assets/title-header-svg.svg"></img>
                </div>
                <div>
                    <div className="justify-right">
                        <UserInitials contactId={mockLoggedInUserId} />
                    </div>
                </div>
            </header>
        </>
    )
}