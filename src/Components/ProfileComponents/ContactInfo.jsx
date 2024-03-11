import React from "react";

function ContactInfo() {
  return (
    <>
      <div className="account-contact-info">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <label>
              <input
                type="text"
                id="account-phone"
                name="account-phone"
                placeholder="Phone number"
                value=""
                onChange=""
              />
            </label>
          </li>
          <li>
            <label>
              <input
                type="text"
                id="account-website"
                name="account-website"
                placeholder="Website"
                value=""
                onChange=""
              />
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
