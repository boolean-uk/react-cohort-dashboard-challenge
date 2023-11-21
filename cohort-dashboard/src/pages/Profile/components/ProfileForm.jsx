import { useState } from "react";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  city: "",
  street: "",
  gender: "",
  email: "",
  jobTitle: "",
};

export default function ProfileForm(props) {
  const [updatedUser, setUpdatedUser] = useState(INITIAL_STATE);

  const { contactProfile, setRefresh } = props;

  const submitForm = (e) => {
    e.preventDefault();

    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    };

    if (updatedUser.firstName) {
      fetch(
        `https://boolean-api-server.fly.dev/yee0802/contact/${contactProfile.id}`,
        opts
      )
        .then((res) => res.json())
        .then(() => {
          const form = document.getElementById("profile-form");

          setUpdatedUser(INITIAL_STATE);
          setRefresh(true);

          form.reset();
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const keys = Object.keys(INITIAL_STATE);
  return (
    <div className="profile-form-container">
      <h2>Account Info:</h2>
      <form id="profile-form">
        {keys.map((opt, idx) => (
          <label htmlFor={opt} key={idx}>
            <b>{`${opt.charAt(0).toUpperCase() + opt.slice(1)}:`}</b>
            <input
              type="text"
              name={opt}
              id={opt}
              placeholder={`${contactProfile[opt]}`}
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
        ))}
      </form>
      <button className="update-profile-btn" onClick={submitForm}>
        Save
      </button>
    </div>
  );
}
