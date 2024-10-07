import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../ApiProvider";
function ProfilePage() {
  const { contactId } = useParams();
  const { contactWithId, fetchContactById, setContactWithId } =
    useContext(MyContext);
  console.log(contactId);

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://boolean-uk-api-server.fly.dev/sebgro98/contact/${contactId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const updatedContact = await response.json();
        console.log("Contact updated successfully", updatedContact);
        setContactWithId(updatedContact);
      } else {
        const errorData = await response.json();
        console.error("Failed to update contact", errorData);
      }
    } catch (error) {
      console.error("An error occurred while updating the contact", error);
    }
  };

  useEffect(() => {
    if (contactId) {
      fetchContactById(contactId);
    }
  }, [contactId, fetchContactById]);

  if (contactId.id) {
    console.log(contactWithId.id, "contactWithId.id");
    console.log(contactId, "contactId");
  }

  useEffect(() => {
    console.log(contactWithId, "contactWithId in useEffect");
    console.log(contactId, "contactId in useEffect");

    const contactWithIdValue = String(contactWithId?.id);
    const contactIdValue = String(contactId);

    if (contactWithId && contactWithIdValue === contactIdValue) {
      console.log("hello, inside useEffect");

      setFormData({
        firstName: contactWithId.firstName || "",
        lastName: contactWithId.lastName || "",
        username: contactWithId.username || "",
        email: contactWithId.email || "",
        phone: contactWithId.phone || "",
        website: contactWithId.website || "",

        street: contactWithId.street || "",
        suite: contactWithId.suite || "",
        city: contactWithId.city || "",
        zipcode: contactWithId.zipcode || "",
      });
    }
  }, [contactWithId, contactId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Profile</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        {/* Account Information Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeader}>Account Information</h3>
          <div style={styles.row}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeader}>Contact Information</h3>
          <div style={styles.row}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Address Information Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeader}>Address Information</h3>
          <div style={styles.row}>
            <label>Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Suite</label>
            <input
              type="text"
              name="suite"
              value={formData.suite}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label>Zip Code</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  sectionHeader: {
    fontSize: "20px",
    color: "#007BFF",
    marginBottom: "15px",
    borderBottom: "2px solid #007BFF",
    paddingBottom: "5px",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    alignSelf: "center",
  },
};

export default ProfilePage;
