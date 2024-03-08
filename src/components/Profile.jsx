import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";
export default function Profile() {

    const {contacts, setContacts} = useContext(MyContext)
    const { contactId } = useParams();
    const contact = contacts.find((contact) => contact.id === parseInt(contactId));
    console.log("contact",contact)
    

    if (!contact) {
      return <div>Contact not found</div>;
    }

    const [formData, setFormData] = useState({
      firstName: contact.firstName || "",
      lastName: contact.lastName || "",
      street: contact.street || "",
      city: contact.city || "",
      email: contact.email || "",
      jobTitle: contact.jobTitle || "",
    });

    useEffect(() => {
      
      setFormData({
        firstName: contact.firstName || "",
        lastName: contact.lastName || "",
        street: contact.street || "",
        city: contact.city || "",
        email: contact.email || "",
        jobTitle: contact.jobTitle || "",
      });
    }, [contact]);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        localStorage.setItem("profileFormData", JSON.stringify(formData));
    
        try {
            
          const response = await fetch(
            `https://boolean-api-server.fly.dev/hassanhussa1n/contact/${contactId}`,
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