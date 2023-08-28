import { useNavigate } from "react-router-dom"

export default function PostBodyInfo(props) {
    const {author, title, id} = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="post-body-info">
            <p className="post-body-author">{author}</p>
            <p className="post-body-title" onClick={handleClick}>{title}</p>
        </div>
    )
}