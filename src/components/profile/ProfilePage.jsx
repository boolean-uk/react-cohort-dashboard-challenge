import "../../style/profile/ProfilePage.css";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const { id } = useParams();

    return (
        <div className="page">
            <p>{id}</p>;
        </div>
    );
};

export default ProfilePage;
