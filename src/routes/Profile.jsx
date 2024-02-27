import "@styles/Content.css";
import "@styles/Post.css";
import "@styles/Profile.css";
import ProfileCircle from "@components/ProfileCircle";
import ProfileFormInput from "@components/Profile/ProfileFormInput";

export default function Profile() {
  return (
    <div className="content">
      <h1>Profile</h1>
      <div className="card">
        <div className="user-info">
          <ProfileCircle fullname="Test User" color="var(--secondary)" />
          <h2>Test User</h2>
        </div>
        <form className="user-info-form">
          <section className="info-section">
            <h1>Account Info</h1>
            <ProfileFormInput name="First Name" required />
            <ProfileFormInput name="Last Name" required />
            <ProfileFormInput name="Username" required />
            <ProfileFormInput name="Email" required />
          </section>
          <section className="info-section">
            <h1>Address</h1>
            <ProfileFormInput name="Street" />
            <ProfileFormInput name="Suite" />
            <ProfileFormInput name="City" />
            <ProfileFormInput name="Zipcode" />
          </section>
          <section className="info-section">
            <h1>Contact Info</h1>
            <ProfileFormInput name="Phone" required />
            <ProfileFormInput name="Website" />
          </section>
          <section className="info-section">
            <h1>Company Info</h1>
            <ProfileFormInput name="Name" />
            <ProfileFormInput name="Catch Phrase" />
            <ProfileFormInput name="Business Statement" />
          </section>
        </form>
      </div>
    </div>
  );
}
