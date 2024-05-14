import ProfileImage from "./ProfileImage";
import PostLi from "./PostLi";
import NewPostForm from "./NewPostForm";

export default function PostsDashboard({ loggedInUser, postData, setPostData }) {
    return (
        <div className="posts-dashboard">
            <section className="new-post-container">
                <ProfileImage loggedInUser={loggedInUser}/>
                <NewPostForm loggedInUser={loggedInUser} postData={postData} setPostData={setPostData}/>
            </section>

            <section className="posts-container">
                <ul className="posts-ul">
                    {postData.map((post, index) => {
                        return <PostLi key={index} post={post} loggedInUser={loggedInUser} />
                    })}
                </ul>
            </section>
        </div>
    )
}