/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UpdateProfileForm({ userToUpdate, logUserIn }) {
  const [formData, setFormData] = useState(userToUpdate)


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const submitData = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${userToUpdate.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    logUserIn()
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 gap-2 flex flex-col bg-white rounded-md p-6"
    >
      <h2 className="font-bold place-self-center text-3xl text-cohortBlue">
        Update User Profile
      </h2>

      <h3 className="font-bold text-2xl text-cohortBlue">Name</h3>
      <label htmlFor="firstName">First</label>
      <input
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        className="border p-1 rounded-md"
      />
      <label htmlFor="lastName">Last</label>
      <input
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        className="border p-1 rounded-md"
      />

      <h3 className="font-bold text-2xl text-cohortBlue">Contact Details</h3>

      <label htmlFor="street">Street</label>
      <input
        onChange={handleChange}
        name="street"
        value={formData.street}
        className="border p-1 rounded-md"
      />

      <label htmlFor="city">City</label>
      <input
        onChange={handleChange}
        name="city"
        value={formData.city}
        className="border p-1 rounded-md"
      />

      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        name="email"
        value={formData.email}
        className="border p-1 rounded-md"
      />
      <button
        className="place-self-center w-28 rounded-md text-white bg-cohortBlue mt-5 hover:bg-buttonHover"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}
