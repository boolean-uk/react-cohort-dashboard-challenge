import Pfp from '../../shared-components/Pfp/profilePicture';


function CreateComment() {
    return (
        <>
        <div className="create-comment">
            <Pfp/>
            <input type="text" placeholder="What's on your mind?"/>
        </div>
        </>
    )
}

export default CreateComment;