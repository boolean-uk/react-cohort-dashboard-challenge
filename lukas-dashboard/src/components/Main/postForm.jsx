import ProfileLogo from "../Reusable/profileLogo";

export default function PostForm() {
    return (
        <div className="postForm">
            <ProfileLogo />
            <form action="">
                <input
                    type="text"
                    placeholder="Whats on your mind?">
                </input>
            </form>
            <button>Post</button>
        </div>
    )
}