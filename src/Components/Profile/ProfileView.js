import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";

function ProfileView(props) {
    // const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const { id } = useParams();

    // const {
    //     state: { userData },
    // } = useLocation();
    // const navigate = useNavigate();
    const { posts, users, loggedUser, setPosts } = useContext(DataContext);
    const userData = findById(users, id);

    // async function getData() {
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/users/${id}`
    //     );
    //     const jsonResponse = await response.json();
    //     setUserData(jsonResponse);
    //     const currentPosts = posts.filter((post) => post.userId === Number(id));
    //     setUserPosts(currentPosts);
    // }
    // useEffect(() => {
    //     getData();
    // }, []);

    if (!userData) {
        return null;
    }
    // console.log(userPosts);
    return (
        <main className="main-section">
            <div className="profile">
                <div className="user-info">
                    <h1>User Profile</h1>
                    <div className="user-details">
                        <h1>{userData.name}</h1>
                        <h2>{userData.username}</h2>
                        <p>Email: {userData.email}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Website: {userData.website}</p>
                        <Link to={`/edit/profile/${id}`}
                        //  state={{ userData }}
                         >
                            <button>EDIT PROFILE</button>
                        </Link>
                    </div>
                </div>
                <div className="posts">
                    <h2>Posts</h2>
                    <ul className="post-list">
                        {userPosts.map((post) => (
                            <li key={post.id} className="post">
                                <h3>{post.title}</h3>
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
