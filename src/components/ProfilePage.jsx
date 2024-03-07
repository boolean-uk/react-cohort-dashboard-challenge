import PropTypes from "prop-types";
import UserCircle from "./UserCircle";
import "./ProfilePage.css";

function ProfilePage(props) {
  const { loggedInUser } = props;
  console.log("loggedInUser: ", loggedInUser);
  return (
    <>
      <h1>Profile</h1>
      <div className="blogpost-card">
        <div className="form-header">
          <UserCircle
            userFirstName={loggedInUser.firstName}
            userLastName={loggedInUser.lastName}
            userfavouriteColour={loggedInUser.favouriteColour}
          />
          <h1>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h1>
        </div>
        <form className="form-form">
          <div className="form-form-grid">
            <h2>Account info</h2>
            <label>First Name*</label>
            <input type="text" placeholder="First Name" />
            <label>Last Name*</label>
            <input type="text" placeholder="Last Name" />
            <label>Username*</label>
            <input type="text" placeholder="Username" />
            <label>Email*</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-form-grid">
            <h2>Address</h2>
            <label>Street</label>
            <input type="text" placeholder="Street" />
            <label>Suite</label>
            <input type="text" placeholder="Suite" />
            <label>City</label>
            <input type="text" placeholder="City" />
            <label>Zipcode</label>
            <input type="text" placeholder="Zipcode" />
          </div>
          <div className="form-form-grid">
            <h2>Contact info</h2>
            <label>Phone*</label>
            <input type="text" placeholder="Phone" />
            <label>Website</label>
            <input type="text" placeholder="Website" />
            <label>*Required</label>
          </div>
          <div className="form-form-grid">
            <h2>Company info</h2>
            <label>Nmae</label>
            <input type="text" placeholder="Name" />
            <label>Catch Phrase</label>
            <input type="text" placeholder="Catch Phrase" />
            <label>Business Statement</label>
            <input type="text" placeholder="Business Statement" />
          </div>
        </form>
        <button>Save</button>
      </div>
    </>
  );
}

ProfilePage.propTypes = {
  loggedInUser: PropTypes.object,
};

export default ProfilePage;
