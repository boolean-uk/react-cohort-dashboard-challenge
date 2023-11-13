import ProfileIcon from "./Header/ProfileIcon";
export default function ProfileForm() {
  return (
    <div className="profile-form">
      <h1>Profile</h1>
      <div className="userProfileName">
      <ProfileIcon />
      <h2>Alex Walker</h2>
      </div>

      <form>
        <div className="account-info">
          <h3>Account Info</h3>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="address-info">
          <h3>Address </h3>
          <label>Street</label>
          <input type="text" placeholder="street" />
          <label>Suite</label>
          <input type="text" placeholder="Suite" />
          <label>City</label>
          <input type="text" placeholder="City" />
          <label>Zip</label>
          <input type="text" placeholder="Zip" />
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <label>Phone*</label>
          <input type="text" placeholder="Phone" />
          <label>Website</label>
          <input type="text" placeholder="Website" />
        </div>
        <div className="company-info">
          <h3>Company Info</h3>
          <label>Name</label>
          <input type="text" placeholder="CompanyName" />
          <label>Catch Phrase</label>
          <input type="text" placeholder="Catch Phrase" />
          <label>Business Statement</label>
          <input type="text" placeholder="Business Statement" />
        </div>
        <input className="btn" type="submit" value="SAVE" />
      </form>
    </div>
  );
}
