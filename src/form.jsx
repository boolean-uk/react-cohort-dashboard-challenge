/* eslint-disable no-constant-condition */
import { useState } from "react";
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
  website: "",
  street: "",
  suite: "",
  city: "",
  zipcode: "",
  name: "",
  catchphrase: "",
  statement: "",
};
function Form() {
  const [form, setForm] = useState(INITIAL_STATE);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);

    setForm(INITIAL_STATE);
  };
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (type === 'text' ) {
      setForm({ ...form, [name]: value });
    } 
    console.log(event.target);
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <h1>Profile</h1>

      <h2>Alex Walker</h2>
      <h3>Account Info</h3>
      <label>
        FirstName*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="firstName"
          value={form.firstName}
          placeholder="Elizabeth"
          required
        />
      </label>
      <label>
        LastName*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="lastName"
          value={form.lastName}
          placeholder="sonuga"
          required
        />
      </label>
      <label>
        UserName*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="userName"
          value={form.userName}
          placeholder="Elizabethcodes"
          required
        />
      </label>
      <label>
        E-mail*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="email"
          value={form.email}
          placeholder="lizbeepmc@gmail.com"
          required
        />
      </label>
      <h3>Contact Info</h3>
      <label>
        Phone*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="phone"
          value={form.phone}
          placeholder="12345"
         
          required
        />
      </label>
      <label>
        Website*
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="website"
          value={form.website}
          placeholder="http://elizabethcodes.com"
          required
        />
      </label>
      <h3>Address</h3>
      <label>
        Street
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="street"
          value={form.street}
          placeholder="karsiyaka tokat"
          required
        />
      </label>
      <label>
        Suite
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="suite"
          value={form.suite}
        />
      </label>
      <label>
        City
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="city"
          value={form.city}
        />
      </label>
      <label>
        Zipcode
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="zipcode"
          value={form.zipcode}
          required
        />
      </label>
      <h3>Company Info</h3>
      <label>
        Name
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="name"
          value={form.name}
        />
      </label>
      <label>
        Catchphrase
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="catchphrase"
          value={form.catchphrase}
          required
        />
      </label>
      <label>
        Business Statement
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="statement"
          value={form.statement}
          required
        />
      </label>
      <input
        onChange={(event) => handleChange(event)}
        className="form__submit"
        type="submit"
        value="save"
      />
    </form>
  );
}
export default Form;
