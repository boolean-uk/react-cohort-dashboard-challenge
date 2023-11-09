
import UserName from "./components/UserName"
import UserInitials from "./components/UserInitials"
import UserAbout from "./components/UserAbout"


export default function AuthorContainer() {
    return(
        <>
            <div>
                <UserInitials />
                <UserName />
                <UserAbout />
            </div>
        </>
    )
}