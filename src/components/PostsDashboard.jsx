import ProfileImage from "./ProfileImage";
import PostLi from "./PostLi";
import NewPostForm from "./NewPostForm";
import { useContext } from "react";
import { DataContext } from "./MainComponent";

export default function PostsDashboard({ loggedInUser }) {
    const { postData } = useContext(DataContext)

    return (
        <div className="posts-dashboard">
            <section className="new-post-container">
                <ProfileImage loggedInUser={loggedInUser}/>
                <NewPostForm loggedInUser={loggedInUser}/>
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