import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StyleContext } from "../../App";
import { DataContext } from "../../App";

function Title({ post, contact }) {
    const { getColorFromInitials, getInitials } = useContext(StyleContext);
    const { user } = useContext(DataContext);

    if (contact && post && user) return (
        <div className="title-container">
            <div className="profile-pic" style={{ backgroundColor: getColorFromInitials(getInitials(contact.firstName, contact.lastName)) }}>
                {getInitials(contact.firstName, contact.lastName)}
            </div>
            <div className="title">
                <div className="name">{contact.firstName} {contact.lastName}</div>
                <div className="post-title"><Link to={"/post/" + post.id} style={{ textDecoration: 'none', color: "#64648c"}}>{post.title}</Link></div>
            </div>
        </div>
    );

    return (
        <li>
            <p>Loading...</p>
        </li>
    )
}

export default Title;
