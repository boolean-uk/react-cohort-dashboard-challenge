import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";
import ProfileHeader from "./ProfileHeader";
import UserInfoBox from "./UserInfoBox";
import UserAddressBox from "./UserAddressBox";
import UserContactInfo from "./UserContactInfo";
import UserCompanyInfo from "./UserCompanyInfo";
import UserPosts from "./UserPosts";
import Loader from "../Loader";

function ProfileView() {
    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const { posts, users, API_BASE_URL } = useContext(DataContext);
    const userData = findById(users, id);

    async function getData() {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}/posts`);
            const jsonResponse = await response.json();

            const currentPosts = posts.filter(
                (post) => post.userId === Number(id) && post.id===101
            );
            const combinedPosts = [...jsonResponse, ...currentPosts];
            setUserPosts(combinedPosts);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching user posts:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (!userData.address) {
        return <Loader />;
    }

    return (
        <main className="main-section">
            <div className="profile">
                <div className="user-profile-info">
                    <h1 class="user-heading">Profile</h1>

                    <ProfileHeader userData={userData} id={id} />

                    <div className="user-profile-details">
                        <UserInfoBox userData={userData} />
                        <UserAddressBox userData={userData} />
                        <UserContactInfo userData={userData} />
                        <UserCompanyInfo userData={userData} />
                    </div>
                </div>
                {isLoading && <Loader />}
                <UserPosts userPosts={userPosts} />
            </div>
        </main>
    );
}

export default ProfileView;
