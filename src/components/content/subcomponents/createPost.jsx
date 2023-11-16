import Pfp from '../../shared-components/Pfp/profilePicture'


export default function CreatePost() {
    return (
        <>
        <div className="create-post">
            <Pfp/>
            <input type="text" placeholder="What's on your mind?"/>
            <button>Post</button>
        </div>
        </>
    )
}

