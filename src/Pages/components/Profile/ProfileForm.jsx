import { useState, useEffect } from "react";
import GetUser from "./GetUser";

function ProfileForm() {
  const { user, loading, error } = GetUser({ userId: 1 });
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="post-container  post-card">
          <div>
            <div
              className="circle"
              style={{
                backgroundColor: user.favouriteColour,
                marginLeft: 430,
                marginBottom: 20,
              }}
            >
              {formData.firstName && formData.firstName.charAt(0)}
              {formData.lastName && formData.lastName.charAt(0)}
            </div>
            <div className="name">
              <h2>
                {formData.firstName} {formData.lastName}
              </h2>
            </div>

            <hr className="line" />

            <h2>Account info</h2>
            <p>
              First Name*{" "}
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ""}
              />
            </p>
            <p>
              Last Name*{" "}
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ""}
              />
            </p>
            <p>
              Email*{" "}
              <input type="email" name="email" value={formData.email || ""} />
            </p>
            <p>
              Street{" "}
              <input type="text" name="street" value={formData.street || ""} />
            </p>
            <p>
              City <input type="text" name="city" value={formData.city || ""} />
            </p>
            <button
              disabled={
                !formData.firstName || !formData.lastName || !formData.email
              }
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileForm;
