import { useState, useEffect } from "react";
import GetUser from "../Profile/GetUser";

export default function CommentUser({ userId }) {
  const { user, loading } = GetUser({ userId });
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div
          className="circle"
          style={{ backgroundColor: formData.favouriteColour }}
        >
          {formData.firstName && formData.firstName.charAt(0)}
          {formData.lastName && formData.lastName.charAt(0)}
        </div>
      )}
    </>
  );
}
