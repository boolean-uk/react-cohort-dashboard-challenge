import Pfp from '../../shared-components/Pfp/profilePicture'


function CreatePost() {
    return (
        <>
        <div className="create-post">
            <Pfp/>
            <input type="text" placeholder="What's on your mind?"></input>
            <button>Post</button>
        </div>
        </>
    )
}

export default CreatePost;