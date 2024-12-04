import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import LeftMenu from "../LeftMenu";
import "../../../../assets/css/Profile.css"

function Profile({ contacts }) {
    let { id } = useParams()
    console.log(id)
    const contact = contacts.find(c => c.id === parseInt(id))
    return (
        <>
            <Header></Header>
            <div className="LeftMenu-Dashboard-container">
                <LeftMenu></LeftMenu>
                <div className="Profile-main">
                    <h1>Profile</h1>
                    <div>
                        {contact.firstName}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;