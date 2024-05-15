import AuthorProfileName from "./AuthorProfileName"
import AuthorProfileForm from "./AuthorProfileForm"

export default function MainProfileComponent() {
    return (
        <main id="author-profile">
            <AuthorProfileName />

            <div id="separator"></div>

            <AuthorProfileForm />
        </main>
    )
}