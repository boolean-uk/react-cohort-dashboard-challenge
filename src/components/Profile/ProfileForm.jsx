import { useEffect, useState } from "react";
import ProfileFormInput from "./ProfileFormInput";
import { useMutation, useQuery } from "react-query";
import { getContact, putContact } from "@services/PostService";

const profileFormInit = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  street: "",
  city: "",
  jobTitle: "",
};

export default function ProfileForm() {
  const [form, setForm] = useState(profileFormInit);
  const { isLoading, data, isSuccess } = useQuery("getContact", getContact);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const { mutateAsync: updateContactAsync } = useMutation(
    "putContact",
    putContact
  );

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateSuccessful(false);
    const updatedForm = await updateContactAsync(form);
    setForm(updatedForm);
    setUpdateSuccessful(true);
  };

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <form className="user-info-form" onSubmit={(e) => handleSubmit(e)}>
        <section className="info-section">
          <h1>Account Info</h1>
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
