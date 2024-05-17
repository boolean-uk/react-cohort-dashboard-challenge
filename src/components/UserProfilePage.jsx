// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function UserProfilePage() {
//   const [user, setUser] = useState([])
//   const {id} = useParams()

//     useEffect(() => {
//     fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${id}`)
//       .then((response) => response.json())
//       .then(setUser);
//   }, [id]);

// // console.log(user.firstName);
//   return (
//     <h1>{user.firstName}</h1>
//   )

// }
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfilePage() {
   const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
    street: "",
    city: "",
    favouriteColour: "",
    profileImage: ""
  });

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/PerikK/contact/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data || {
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          jobTitle: "",
          street: "",
          city: "",
          favouriteColour: "",
          profileImage: ""
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', user);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={user.gender || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={user.jobTitle || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={user.street || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={user.city || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Favourite Colour:
          <input
            type="text"
            name="favouriteColour"
            value={user.favouriteColour || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Profile Image URL:
          <input
            type="text"
            name="profileImage"
            value={user.profileImage || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
