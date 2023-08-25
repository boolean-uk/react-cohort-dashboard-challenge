export default function PostBodyInfo(props) {
    return (
        <div className="post-body-info">
            <p className="post-body-author">{props.author}</p>
            <p className="post-body-title">{props.title}</p>
        </div>
    )
}