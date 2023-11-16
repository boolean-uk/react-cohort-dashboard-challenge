import { Link, useNavigate, useParams } from "react-router-dom"

function NameTitleContainer({ author, post }) {

    const { postId } = useParams()
    const navigate = useNavigate()

    if (!postId)
    return (
        <div className="name-title-container grid">
            <h3 className="author-name" onClick={() => navigate(`/profile/${author.id}`)}>{author.firstName} {author.lastName}</h3>
            <Link className="post-title-link" to={`/post/${post.id}`}>
                <h4 className="post-title">{post.title}</h4>
            </Link>
        </div>
    )

    else return (
        <div className="name-title-container grid">
            <h3 className="author-name">{author.firstName} {author.lastName}</h3>
                <h4 className="current-selected-post">{post.title}</h4>
        </div>
    )
}

export default NameTitleContainer