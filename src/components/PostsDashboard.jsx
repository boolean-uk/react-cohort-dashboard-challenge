import ProfileImage from "./ProfileImage";

export default function PostsDashboard({ loggedInUser }) {
    return (
        <div className="posts-dashboard">
            <section className="new-post-container">
                <ProfileImage loggedInUser={loggedInUser}/>
                <input type="text" placeholder="What's on your mind?" className="new-post-input"/>
                <button className="post-button">Post</button>
            </section>

            <section className="posts-container">

            </section>
        </div>
    )
}