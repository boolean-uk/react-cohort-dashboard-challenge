import { useState, useEffect } from "react";
import GetUser from "./Profile/GetUser";

export default function Users({ userId }) {
  const { user, loading } = GetUser({ userId });
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div className="circle-container">
          <div
            className="circle"
            style={{ backgroundColor: formData.favouriteColour }}
          >
            {formData.firstName && formData.firstName.charAt(0)}
            {formData.lastName && formData.lastName.charAt(0)}
          </div>
          <div className="name">
            <h2>
              {formData.firstName} {formData.lastName}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
