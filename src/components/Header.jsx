import UserInitials from "./components/components/components/components/components/components/UserInitials"
 

export default function Header({mockLoggedInUserId}) {
    
    return(
        <>
            <header className="main-header">
                <div>
                    <img src="../../assets/title-header-svg.svg"></img>
                </div>
                <div>
                    <div className="justify-right">
                        <UserInitials contactId={mockLoggedInUserId}/>
                    </div>
                </div>
            </header>
        </>
    )
}