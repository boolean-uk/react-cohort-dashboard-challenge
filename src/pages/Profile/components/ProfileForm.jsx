import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { addContentToDb } from "../../../Api";
import { MyContext } from "../../../App";
import InitialCircle from "../../Dashboard/components/InitialCircle";



const ProfileForm = () => {
  const {contacts, getInitials} = useContext(MyContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    name: "",
    catchPhrase: "",
    businessStatement: "",
  });
  const [contact, setContact] = useState()

  const { id } = useParams()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContentToDb(formData);
  };

  useEffect(() => {
    setContact(contacts.find(x => x.id === parseInt(id)))
  }, [contacts]);

  const { firstName, lastName, username, email, phone, website, street, suite, city, 
    zipcode, name, catchPhrase, businessStatement } = formData;

    if (contact) return (
      <div className="container">
        <h2>Profile</h2>
        <form className="row">
        <InitialCircle contact={contact}/>
        <h2>{contact.firstName} {contact.lastName}</h2>
          <div className="col-md-6">
            
            <div className="account-info">
              <h3>Account info</h3>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username*</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact-info">
              <h3>Contact info</h3>
              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  name="website"
                  value={website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="address-info">
              <h3>Address</h3>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                  value={street}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="suite">Suite</label>
                <input
                  type="text"
                  className="form-control"
                  id="suite"
                  name="suite"
                  value={suite}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  name="zipcode"
                  value={zipcode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="company-info">
              <h3>Company info</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="catchPhrase">Catch Phrase</label>
                <input
                  type="text"
                  className="form-control"
                  id="catchPhrase"
                  name="catchPhrase"
                  value={catchPhrase}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="businessStatement">Business Statement</label>
                <textarea
                  className="form-control"
                  id="businessStatement"
                  name="businessStatement"
                  value={businessStatement}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
          </div>
        </form>
      </div>
    );
}

export default ProfileForm