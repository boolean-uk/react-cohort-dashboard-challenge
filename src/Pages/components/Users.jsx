import { useEffect, useState } from "react";
import { getRequest } from "../../API";

export default function Users({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // on load: fetch user
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/contact/${userId}`);
      if (error === null) {
        setUser(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [userId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div>
          <img
            src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
          />
          <p>
            {user.firstName} {user.lastName}
          </p>
        </div>
      )}
    </>
  );
}
