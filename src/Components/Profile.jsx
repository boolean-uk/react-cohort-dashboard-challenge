import { useContext } from "react";
import PostContext from "./PostContext";

function Profile({ user }) {
  const { userLoading } = useContext(PostContext);

  if (userLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main id="profile-main-area">
        <h1>Profile</h1>
        <div id="profile-content">
          <div id="user-heading">
            <p className="user-profile-button">{`${user.firstName[0]}${user.lastName[0]}`}</p>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
          </div>
          <div id="profile-sections">
            <div id="account-info">
              <h2 className="profile-heading">Account Info</h2>
              <ul>
                <li className="profile-item">
                  <p className="profile-subheading">First Name</p>
                  <input placeholder={user.firstName}></input>
                </li>
                <li className="profile-item">
                  <p className="profile-subheading">Last Name</p>
                  <input placeholder={user.lastName}></input>
                </li>
                <li className="profile-item">
                  <p className="profile-subheading">Username</p>
                  <input
                    placeholder={`${user.firstName[0]}${user.lastName}`}
                  ></input>
                </li>
                <li className="profile-item">
                  <p className="profile-subheading">Gender</p>
                  <input placeholder={user.gender}></input>
                </li>
              </ul>
            </div>
            <div id="Address">
              <h2 className="profile-heading">Address</h2>
              <ul>
                <li className="profile-item">
                  <p className="profile-subheading">Street</p>
                  <input placeholder={user.street}></input>
                </li>
                <li className="profile-item">
                  <p className="profile-subheading">City</p>
                  <input placeholder={user.city}></input>
                </li>
              </ul>
            </div>
            <div id="contact-info">
              <h2 className="profile-heading">Contact Info</h2>
              <ul>
                <li className="profile-item">
                  <p className="profile-subheading">Website</p>
                  <input placeholder={user.profileImage}></input>
                </li>
                <li className="profile-item">
                  <p className="profile-subheading">Email</p>
                  <input placeholder={user.email}></input>
                </li>
              </ul>
            </div>
            <div id="company-info">
              <h2 className="profile-heading">Company Info</h2>
              <ul>
                <li className="profile-item">
                  <p className="profile-subheading">Job Title</p>
                  <input placeholder={user.jobTitle}></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Profile;
