import { Link } from "react-router-dom"

function NameTitleContainer({ author, post }) {

    return (
        <div className="name-title-container grid">
            <h3 className="author-name">{author.firstName} {author.lastName}</h3>
            <Link to={`/post/${post.id}`}>
                <h4 className="post-title">{post.title}</h4>
            </Link>
        </div>
    )
}

export default NameTitleContainer