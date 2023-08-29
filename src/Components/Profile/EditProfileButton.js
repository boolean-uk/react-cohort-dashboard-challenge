import { Link } from "react-router-dom";

function EditProfileButton(props) {
    const { id } = props;
    return (
        <Link to={`/edit/profile/${id}`} style={{ textDecoration: "none" }}>
            <button className="edit-profile-button">EDIT PROFILE</button>
        </Link>
    );
}

export default EditProfileButton;
