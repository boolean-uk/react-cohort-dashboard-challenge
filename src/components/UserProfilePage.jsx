import ProfilePageHeader from "./components/ProfilePageHeader"
import ProfilePageForm from "./components/ProfilePageForm"

export default function UserProfilePage( {setReloadContacts, reloadContacts} ) {
    return(
        <>
        <main>
            <ProfilePageHeader />
            <ProfilePageForm  setReloadContacts={setReloadContacts} reloadContacts={reloadContacts}/> 
        </main>
        </>
    )
}
