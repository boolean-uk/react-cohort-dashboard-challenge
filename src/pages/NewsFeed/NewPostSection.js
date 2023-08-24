import NewPost from "./NewPost";

export default function NewPostSection() {
    return (
        <div className="new-post-section">
            <NewPost />
            <button className='new-post-button' type='button'>Post</button>
        </div>
    )
}