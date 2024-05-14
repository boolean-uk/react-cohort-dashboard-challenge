import TextInput from "./TextInput";

export default function Profile() {
  return (
    <>
      <h1>Profile</h1>

      <div className="profile">
        <div className="profile-header">profile header</div>

        <form action="" className="profile-form">
          <div className="account-info">
            <h2>Account info</h2>
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </div>

          <div className="address">
            <h2>Address</h2>
            <TextInput />
            <TextInput />
          </div>

          <div className="contact-info">
            <h2>Contact info</h2>
            <TextInput />
          </div>

          <div className="save"></div>
        </form>
      </div>
    </>
  );
}
