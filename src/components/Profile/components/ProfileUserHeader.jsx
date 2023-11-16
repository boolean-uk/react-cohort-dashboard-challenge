import { useEffect, useState } from "react"
import ProfileFormProfileCircle from "./ProfileFormProfileCircle"

function ProfileUserHeader({ contactId, URL }) {

    const [author, setAuthor] = useState(null)

    useEffect(() => {
            fetch(`${URL}/contact/${contactId}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, contactId])

    if (!author) return <p>Loading post...</p>

    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    return (
        <div className="profile-user-header grid">
            <ProfileFormProfileCircle initials={initials} author={author} />
            <h3 className="profile-author-name">{author.firstName} {author.lastName}</h3>
        </div>
    )
}

export default ProfileUserHeader