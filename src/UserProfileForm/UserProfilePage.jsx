import ProfilePageHeader from "./UserProfileForm_components/ProfilePageHeader"
import ProfilePageForm from "./UserProfileForm_components/ProfilePageForm"

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
