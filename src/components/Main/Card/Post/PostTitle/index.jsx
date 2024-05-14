import ProfileImage from "../../../../ProfileImage"

export default function PostTitle(props) {
    const {author, title} = props

   
    return(
        <div className="post-header">
        <ProfileImage author={author}/>
        <div>
            <h3>{author && Object.keys(author).length > 0  ? author.firstName + " " + author.lastName : ""}</h3>
            <p>{title}</p>
        </div>
        </div>
    )
}