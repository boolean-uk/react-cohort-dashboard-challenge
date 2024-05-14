import ProfileImage from "../../../ProfileImage";

export default function CreatePost() {
    
    
    return (
        <div className="create-post">
        <ProfileImage/>
        <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Create a post!"/>
            <button type="submit">Post</button>
        </form>
        </div>
    )
}