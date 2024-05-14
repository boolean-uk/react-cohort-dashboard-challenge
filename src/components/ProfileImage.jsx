export default function ProfileImage({ author }) {

    return (
        <span
            className="profile-image"
            style={{ backgroundColor: typeof author === "object" ? author.favouriteColour : 'red' }}
        >
            {author && Object.keys(author).length > 0 ? author.firstName[0] + author.lastName[0] : 'AT'}
        </span>
    )
}
