import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { getInitials } from "../Utils/helpers";
import { useNavigate } from "react-router-dom";
function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const { fetchUser, loggedInUser } = useContext(AppContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    businessStatement: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Eliassoprani/contact/${id}`,
        {
          method: "PUT",
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
        console.log(response);
        navigate(0)
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    fetchUser(id).then((response) => {
      setUser(response);
      setFormData({
        firstName: response.firstName,
        lastName: response.lastName,
        username: response.name,
        email: response.email,
        street: response.street,
        suite: "suite",
        city: response.city,
        zipcode: "123",
        phone: "123 555 45 67",
        website: "https://google.com",
        companyName: response.name + " AB",
        catchPhrase: "Bonerific",
        businessStatement: "NFT and Crypto investments",
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isDisabled = !user || loggedInUser.id !== user.id;

  return (
    <div>
      <h1 style={{margin: "0px", marginBottom:"20px"}}>Profile</h1>
      <div
        className="form-card"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {user && (
          <div style={{display: "flex"}}>
        <div
          className="profile-picture"
          style={{ backgroundColor: user.favouriteColour }}>
          <p>{getInitials(user.name)}</p>
        </div>
        <h2 style={{margin: "0px"}}>{user.name}</h2>
        </div>
      )}
        <form className="profile-form" onSubmit={handleSubmit}>
          {" "}
          <div className="form-row">
            <div className="form-column">
              <h2>Account Info</h2>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                disabled={isDisabled}
              />
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                disabled={isDisabled}
              />
              <p>Username</p>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                disabled={isDisabled}
              />
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                disabled={isDisabled}
              />
            </div>
            <div className="form-column">
              <h2>Address</h2>
              <p>Street</p>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street"
                disabled={true}
              />
              <p>Suite</p>
              <input
                type="text"
                name="suite"
                value={formData.suite}
                onChange={handleChange}
                placeholder="Suite"
                disabled={true}
              />
              <p>City</p>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                disabled={true}
              />
              <p>Zipcode</p>
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
                disabled={true}
              />
            </div>
          </div>
          <hr></hr>
          <div className="form-row">
            <div className="form-column">
              <h2>Contact Info</h2>
              <p>Phone</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                disabled={isDisabled}
              />
              <p>Website</p>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                disabled={isDisabled}
              />
            </div>
            <div className="form-column">
              <h2>Company Info</h2>
              <p>Name</p>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                disabled={isDisabled}
              />
              <p>Catch Phrase</p>
              <input
                type="text"
                name="catchPhrase"
                value={formData.catchPhrase}
                onChange={handleChange}
                placeholder="Catch Phrase"
                disabled={isDisabled}
              />
              <p>Business Statement</p>
              <input
                type="text"
                name="businessStatement"
                value={formData.businessStatement}
                onChange={handleChange}
                placeholder="Business Statement"
                disabled={isDisabled}
              />
            </div>
          </div>
          {!isDisabled && <button className="btn" type="submit" style={{width: "25%", marginLeft: "auto", marginTop: "20px"}}>
            Save
          </button>}
        </form>
      </div>
    </div>
  );
}

export default Profile;
