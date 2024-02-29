import { useState } from "react";
import ProfileFormInput from "./ProfileFormInput";
import { useMutation } from "react-query";
import { putContact } from "@services/PostService";

export default function ProfileForm({ user }) {
  const [form, setForm] = useState(user);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const { mutateAsync: updateContactAsync } = useMutation(
    "putContact",
    putContact
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateSuccessful(false);
    const updatedForm = await updateContactAsync(form)
      .catch(setUpdateSuccessful(false))
      .finally(setUpdateSuccessful(true));
    setForm(updatedForm);
  };

  if (!user) {
    return <h2>No user with given id</h2>;
  }

  return (
    <>
      <form className="user-info-form" onSubmit={(e) => handleSubmit(e)}>
        <section className="info-section">
          <h1>Account info</h1>
          <ProfileFormInput
            name="First Name"
            required
            value={form.firstName}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Last Name"
            required
            value={form.lastName}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </section>
        <section className="info-section">
          <h1>Other info</h1>
          <ProfileFormInput
            name="Street"
            value={form.street}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="City"
            value={form.city}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Job Title"
            value={form.jobTitle}
            onChange={handleChange}
          />
        </section>
        <button type="submit" className="cm-button" style={{ height: "50px" }}>
          Save
        </button>
        {updateSuccessful && (
          <p style={{ color: "green" }}>Saved successfully!</p>
        )}
      </form>
    </>
  );
}
