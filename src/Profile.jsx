import React, { useState } from "react";

function Profile({ profile, setProfile }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [Name, setName] = useState("");
  const [catchphrase, setCatchphrase] = useState("");
  const [businessstatement, setBusinessStatement] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProfile = {
      firstName,
      lastName,
      UserName,
      email,
      phone,
      website,
      street,
      suite,
      city,
      zipcode,
      Name,
      catchphrase,
      businessstatement,
    };

    try {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/MayraMahamud/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProfile),
        }
      );

      if (response.ok) {
        setProfile([...profile, newProfile]);
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Account Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <div>
          <input
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h2>Contact info</h2>
        <div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <h2>Address</h2>
        <div>
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Suite"
            value={suite}
            onChange={(e) => setSuite(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <h2>Company Info</h2>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Catch Phrase"
            value={catchphrase}
            onChange={(e) => setCatchphrase(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Business Statement"
            value={businessstatement}
            onChange={(e) => setBusinessStatement(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;