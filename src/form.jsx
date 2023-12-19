import { useState } from "react";
const INITIAL_STATE = {
  FirstName: "",
  LastName: "",
  UserName: "",
  EMail: "",
  Phone: 0,
  website: "",
  street: "",
  Suite: "",
  city: "",
  zipcode: 0,
  name: "",
  catchphrase: "",
  statement: "",
};
function Form() {
  return (
    <div className="form">
      <h1>Profile</h1>
      <form>
        <h2>Alex Walker</h2>
        <h3>Account Info</h3>
        <label>
          FirstName*
          <input
            type="text"
            name="FirstName"
            value=""
            placeholder="Elizabeth"
            required
          />
        </label>
        <label>
          LastName*
          <input
            type="text"
            name="LastName"
            value=""
            placeholder="sonuga"
            required
          />
        </label>
        <label>
          UserName*
          <input
            type="text"
            name="UserName"
            value=""
            placeholder="Elizabethcodes"
            required
          />
        </label>
        <label>
          E-mail*
          <input
            type="e-mail"
            name="EMail"
            value=""
            placeholder="lizbeepmc@gmail.com"
            required
          />
        </label>
        <h3>Contact Info</h3>
        <label>
          Phone*
          <input
            type="number"
            name="Phone"
            value=""
            placeholder="05525128270"
            required
          />
        </label>
        <label>
          Website*
          <input
            type="website"
            name="website"
            value=""
            placeholder="http://elizabethcodes.com"
            required
          />
        </label>
        <h3>Address</h3>
        <label>
          Street
          <input
            type="text"
            name="street"
            value=""
            placeholder="karsiyaka tokat"
            required
          />
        </label>
        <label>
          Suite
          <input type="text" name="Suite" value="" />
        </label>
        <label>
          City
          <input type="text" name="city" value="" />
        </label>
        <label>
          Zipcode
          <input type="number" name="zipcode" value="" required />
        </label>
        <h3>Company Info</h3>
        <label>
          Name
          <input type="text" name="name" value="" />
        </label>
        <label>
          Catchphrase
          <input type="text" name="catchphrase" value="" required />
        </label>
        <label>
          Business Statement
          <input type="text" name="statement" value="" required />
        </label>
        <input className="form__submit" type="submit" value="save" />
      </form>
    </div>
  );
}
export default Form;
