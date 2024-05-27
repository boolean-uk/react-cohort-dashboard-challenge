import UserIcon from "./UserIcon";

export default function ProfilePage () {
    return (
        <main className="page">
            <h2>Profile</h2>
            <section>
                <UserIcon userInfo={{firstName: "A", lastName: "W"}} />
            </section>
        </main>

    )
}