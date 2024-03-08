import { useParams } from "react-router-dom";
import NavLeft from "../Nav-Left";
import NavTop from "../Nav-Top";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

function Profile() {
  const { userId } = useParams();
  const { users } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setUser(users.find((u) => u.id === parseInt(userId)));
  }, [userId, users]);

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

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
        `https://boolean-api-server.fly.dev/espensolhaug1/contact/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("User updated successfully");
        setUser(formData);
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavTop />
      <div>
        <NavLeft />
        <div className="mainContent">
          <div className="profile">
            <div className="profileInfo">
              {user && (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex" }}>
                    <div className="profileDiv">
                      <div className="profileItem">
                        <label htmlFor="firstName" value="First Name">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={handleChange}
                          value={formData.firstName || ""}
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="profileItem">
                        <label htmlFor="lastName" value="Last Name">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          onChange={handleChange}
                          value={formData.lastName || ""}
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="profileItem">
                        <label htmlFor="email" value="E-mail">
                          E-mail
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          value={formData.email || ""}
                          placeholder="E-mail"
                          required
                        />
                      </div>
                      <div className="profileItem">
                        <label htmlFor="jobTitle" value="Job Title">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          onChange={handleChange}
                          value={formData.jobTitle || ""}
                          placeholder="jobTitle"
                          required
                        />
                      </div>
                    </div>
                    <div className="profileDiv">
                      <div className="profileItem">
                        <label htmlFor="street" value="Street">
                          Street
                        </label>
                        <input
                          type="text"
                          name="street"
                          id="street"
                          onChange={handleChange}
                          value={formData.street || ""}
                          placeholder="Street"
                          required
                        />
                      </div>
                      <div className="profileItem">
                        <label htmlFor="city" value="City">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          onChange={handleChange}
                          value={formData.city || ""}
                          placeholder="city"
                          required
                        />
                      </div>
                      <input
                        style={{
                          width: "50%",
                          backgroundColor: "#646cff",
                          borderRadius: "5%",
                        }}
                        type="submit"
                        value="Post!"
                      ></input>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
