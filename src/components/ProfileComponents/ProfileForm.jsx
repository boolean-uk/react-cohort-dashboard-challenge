import { useState } from "react";
import ProfileFormInput from "./ProfileFormInput";
import { useMutation } from "react-query";
import { putContact } from "../../services/PostService";
import "../../styles/Profile.css"

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
      .finally(() => {
        setUpdateSuccessful(true);
        // Reset updateSuccessful state after 2 seconds
        setTimeout(() => {
          setUpdateSuccessful(false);
        }, 2000); //2 seconds
      });
    setForm(updatedForm);
  };

  if (!user) {
    return <h2>No user found</h2>;
  }

  return (
    <>
      <form className="user-info-form" onSubmit={(e) => handleSubmit(e)}>
        <section className="info-section">
          <h1>Profile info</h1>
          <ProfileFormInput
            name="First Name"
            required //user has to have
            value={form.firstName}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Last Name"
            required //user has to have
            value={form.lastName}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Email"
            required //user has to have
            value={form.email}
            onChange={handleChange}
          />
        </section>
        <section className="info-section-2">
          <h1>Address</h1>
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
          <label htmlFor="Position">Position</label>
          <div className="map-container">
            <iframe loading="async"
              src={`https://maps.google.com/maps?q=${form.latitude}+${form.longitude}&output=embed&z=5`}> 
            </iframe>
          </div>
        </section>
        <section className="info-section-2">
        <h1>Job info</h1>
        <ProfileFormInput
            name="Job Title"
            value={form.jobTitle}
            onChange={handleChange}
        />
        </section>
        <section className="info-section-2">
        <h1>Other</h1>
          <ProfileFormInput
            name="Favourite colour"
            value={form.favouriteColour}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Gender"
            value={form.gender}
            onChange={handleChange}
          />
          <div className="succ-button-container">
            {updateSuccessful && (
              <span className="succ-button" style={{ color: "#00cc00"}}>
                Saved successfully!
              </span>
            )}
            <button type="submit" className="cm-button" style={{ height: "50px"}}>
              Save
            </button>
          </div>
        </section>
      </form>
    </>
  );
}