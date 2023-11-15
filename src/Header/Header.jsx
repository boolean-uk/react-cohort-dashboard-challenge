import UserInitials from "../Low-level_components/UserInitials"
// import { useState, useEffect} from "react"
 

export default function Header({mockLoggedInUserId, reloadContacts}) {
    reloadContacts
    return(
        <>
            <header className="main-header">
                <div>
                    <img src="../../assets/title-header-svg.svg"></img>
                </div>
                <div>
                    <div className="justify-right">
                        {/* only displays the new value upon refresh if I force a full page refresh. It currently seems to refresh before getting the newest value in, and I've run out of ideas. Having setReloadContacts() run within a .then() after then fetch() is used within the putData function failed - it still ran too early. Not quite sure why, or how to solve it.*/}
                        <UserInitials contactId={mockLoggedInUserId} key={reloadContacts}/>
                    </div>
                </div>
            </header>
        </>
    )
}