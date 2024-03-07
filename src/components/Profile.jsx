import { useState, useContext, useEffect } from "react";
import { MyContext } from "../App";
export default function Profile() {

    const {contacts, setContacts} = useContext(MyContext)
    console.log("contacts",contacts)
    const user1 = contacts.length > 0 ? contacts[0] : {};

    const [formData, setFormData] = useState({
      firstName: user1.firstName || "",
      lastName: user1.lastName || "",
      street: user1.street || "",
      city: user1.city || "",
      email: user1.email || "",
      jobTitle: user1.jobTitle || "",
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("profileFormData")) || {};
        setFormData((prevData) => ({ ...prevData, ...storedData }));
      }, []);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        localStorage.setItem("profileFormData", JSON.stringify(formData));
    
        try {
            
          const response = await fetch(
            `https://boolean-api-server.fly.dev/hassanhussa1n/contact/1`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
    
          if (response.ok) {
            console.log("Contact data updated successfully.");
          } else {
            console.error("Failed to update contact data.");
          }
        } catch (error) {
          console.error("Error during PUT request:", error);
        }
      };


return (
    <div>
      <header className="header blue">
      </header>

      <div className="container-nav-main">
        
        <nav className="sidebar red">
        
        </nav>

        <main className="main green">
        <div className="rounded-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />

        <button type="submit" className="postButton">
          Submit
        </button>
      </form>
    </div>
        </main>
      </div>
    </div>
)

}