import Pfp from '../../shared-components/Pfp/profilePicture'


export default function CreatePost() {

    const handleChange = (event) => {
        const value = event.target.value
    }

    const handleSubmit = (event) => {
        event.preventDefault()


    }

    return (
        <>
        <div className="create-post">
            <Pfp/>
            <form className="post-form">
                <input type="text" placeholder="What's on your mind?"/><button>Post</button>
                
            </form>
        </div>
        </>
    )
}

