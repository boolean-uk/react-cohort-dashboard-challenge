import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";
import "./index.css";

export default function ShowPost() {
  const userContext = useContext(UserContext);

  const { id } = useParams();

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setUser(userContext.users.find((user) => Number(user.id) === Number(id)));
  }, [userContext.users, id]);

  if (!user) return <div></div>;

  console.log("IN SHOW user profile", user);

  return (
    <div>
      <header>
        <h1 className="profile_header">Profile</h1>
      </header>
      <div className="profile_grid">
        <div className="left_column">
          <div className="profile_header_grid">
            <div
              className=" profile_circle"
              style={{ backgroundColor: user.favouriteColour }}
            >
              <p className=" profile_circle_text">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </p>
            </div>
            <div>
              <h2 className="column_titles">
                {user.firstName + " " + user.lastName}
              </h2>
            </div>
          </div>

          <hr className="info_dividers" />
          <h2 className="column_titles">Account Info</h2>
          <div className="info_container">
            <label className="info_labels">First Name*</label>
            <input
              className="info_text_fields"
              type="text"
              id="first_name"
              name="first_name"
              value={user.firstName}
            />
          </div>
          <div className="info_container">
            <label>Last Name*</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={user.lastName}
            />
          </div>
          <div className="info_container">
            <label>Gender</label>
            <input type="text" id="gender" name="gender" value={user.gender} />
          </div>
          <div className="info_container">
            <label>Email*</label>
            <input type="text" id="email" name="email" value={user.email} />
          </div>

          <hr className="info_dividers" />

          <h2 className="column_titles">Jobb Info</h2>
          <div className="info_container">
            <label className="info_labels">Job Title</label>
            <input
              className="info_text_fields"
              type="text"
              id="job_title"
              name="job_title"
              value={user.jobTitle}
            />
          </div>
        </div>

        <div>
          <div className="right_column">
            <div className="profile_header_empty"></div>
            <hr className="info_dividers" />
            <h2 className="column_titles">Profile Picture</h2>
            <img src={user.profileImage} className="profile_picture" />

            <hr className="info_dividers" />

            <h2 className="column_titles">Address</h2>
            <div className="info_container">
              <label className="info_labels">Street</label>
              <input
                className="info_text_fields"
                type="text"
                id="street"
                name="street"
                value={user.street}
              />
            </div>
            <div className="info_container">
              <label>City</label>
              <input type="text" id="city" name="city" value={user.city} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
