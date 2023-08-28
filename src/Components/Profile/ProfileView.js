import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById, getInitials } from "../../Utils";

function ProfileView() {
    const [userPosts, setUserPosts] = useState([]);
    const { id } = useParams();

    const { posts, users, loggedUser, setPosts } = useContext(DataContext);
    const userData = findById(users, id);

    async function getData() {
        const currentPosts = posts.filter((post) => post.userId === Number(id));
        setUserPosts(currentPosts);
    }
    useEffect(() => {
        getData();
    }, []);

    if (!userData) {
        return null;
    }

    return (
        <main className="main-section">
            <div className="profile">
                <div className="user-profile-info">
                    <h1 class="user-heading">Profile</h1>
                    <div className="user-header">
                        <div class="user-circle-own">
                            {getInitials(loggedUser.name)}{" "}
                        </div>
                        <h2>{userData.name}</h2>
                        <Link
                            to={`/edit/profile/${id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <button className="edit-profile-button">
                                EDIT PROFILE
                            </button>
                        </Link>
                    </div>

                    <div className="user-profile-details">
                        <div className="user-info-box">
                            <h2>Account info</h2>
                            <div className="detail">
                                <span>First Name:</span>{" "}
                                {userData.name.split(" ")[0]}
                            </div>
                            <div className="detail">
                                <span>Last Name:</span>{" "}
                                {userData.name.split(" ")[1]}
                            </div>
                            <div className="detail">
                                <span>Username:</span> {userData.username}
                            </div>
                            <div className="detail">
                                <span>Email:</span> {userData.email}
                            </div>
                        </div>
                        <div className="user-address-box">
                            <h2>Address</h2>
                            <div className="detail">
                                <span>Street:</span> {userData.address.street}
                            </div>
                            <div className="detail">
                                <span>Suite:</span> {userData.address.suite}
                            </div>
                            <div className="detail">
                                <span>City:</span> {userData.address.city}
                            </div>
                            <div className="detail">
                                <span>Zipcode:</span> {userData.address.zipcode}
                            </div>
                        </div>

                        <div className="user-contact-info">
                            <h2>Contact Info</h2>
                            <div className="detail">
                                <span>Phone:</span> {userData.phone}
                            </div>
                            <div className="detail">
                                <span>Website:</span> {userData.website}
                            </div>
                        </div>
                        <div className="user-company-info">
                            <h2>Company Info</h2>
                            <div className="detail">
                                <span>Name:</span> {userData.company.name}
                            </div>
                            <div className="detail">
                                <span>Catch Phrase:</span>
                                {userData.company.catchPhrase}
                            </div>
                            <div className="detail">
                                <span>Business Statement:</span>
                                {userData.company.bs}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <h2>Posts</h2>
                    <ul className="post-list">
                        {userPosts.map((post, index) => (
                            <li key={index}>
                                <Link
                                    to={`/view/post/${post.id}`}
                                    state={{
                                        data: { currentPost: post },
                                    }}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div class="post-title">{post.title}</div>
                                </Link>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default ProfileView;
