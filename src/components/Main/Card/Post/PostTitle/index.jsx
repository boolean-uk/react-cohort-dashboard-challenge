import ProfileImage from "../../../../ProfileImage"

export default function PostTitle({author, title}) {
    return(
        <div className="post-header">
        <ProfileImage/>
        <div>
            <h3>{author}</h3>
            <p>{title}</p>
        </div>
        </div>
    )
}