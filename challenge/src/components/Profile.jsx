import { useState, useEffect, useContext } from 'react';
import '../style/dash.css';
import { MyContext } from '../App';

const updateContact = async (contactId, updatedInfo) => {
  try {
    const response = await fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Update Error:", error.message);
    throw error;
  }
};

export default function Profile() {
const { contacts, setContacts} = useContext(MyContext);
  const [contactInfo, setContactInfo] = useState({
    id: '', 
    firstName: '',
    lastName: '',
    email: '',
    city: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (contacts.length > 0) {
      const firstContact = contacts[0];
      setContactInfo(firstContact);
    }
  }, [contacts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let errors = {};
    if (!contactInfo.firstName.trim()) errors.firstName = 'First name is required';
    if (!contactInfo.lastName.trim()) errors.lastName = 'Last name is required';
    if (!contactInfo.email.trim()) errors.email = 'Email is required';
    if (!contactInfo.city.trim()) errors.city = 'City is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return; 
    }

    try {
      const updatedContact = await updateContact(contactInfo.id, contactInfo);
      console.log('Contact updated successfully:', updatedContact);
      // Update local state
      setContacts((prevContacts) =>
        prevContacts.map((contact) => (contact.id === contactInfo.id ? updatedContact : contact))
      );
    } catch (error) {
      setSubmitError(error.message || 'Failed to update contact');
    }
  };

  return (
    <div className='formWrap'>
      <div className='profileForm'>
        <form className='form' onSubmit={handleSubmit}>
          {/* First Name */}
          <label htmlFor="firstName"><h6>First Name</h6></label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={contactInfo.firstName}
            className={formErrors.firstName ? 'error' : ''}
          />
          {formErrors.firstName && <p className="errorText">{formErrors.firstName}</p>}

          {/* Last Name */}
          <h6>Last Name</h6>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={contactInfo.lastName}
            className={formErrors.lastName ? 'error' : ''}
          />
          {formErrors.lastName && <p className="errorText">{formErrors.lastName}</p>}

          {/* Email */}
          <h6>Email</h6>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={contactInfo.email}
            className={formErrors.email ? 'error' : ''}
          />
          {formErrors.email && <p className="errorText">{formErrors.email}</p>}

          {/* City */}
          <h6>City</h6>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={contactInfo.city}
            className={formErrors.city ? 'error' : ''}
          />
          {formErrors.city && <p className="errorText">{formErrors.city}</p>}

          <button type="submit">Save</button>
          {submitError && <p className="submitError">{submitError}</p>}
        </form>
      </div>
    </div>
  );
}
