import { useEffect } from "react";
import "./style.css";

const ProfilePage = ({ setPage }) => {
    useEffect(() => {
        setPage("profile");
    }, []);
    return <div>ProfilePage</div>;
};

export default ProfilePage;
