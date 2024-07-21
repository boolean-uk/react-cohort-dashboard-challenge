import { Post } from "../../../App";

export default function PostListItem(props: { post: Post }) {
    return (
        <div className="card bg-base-200 min-w-full p-4">
            <p className='card-body'><span className='card-title'>{props.post.title}</span>{props.post.content}</p>
        </div>
    )
}
