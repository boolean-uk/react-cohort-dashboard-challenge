import ProfileFormInput from "./ProfileFormInput";

export default function ProfileForm() {
  return (
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
  );
}
