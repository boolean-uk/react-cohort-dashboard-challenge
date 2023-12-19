/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import CustomProfileIcon from "../../components/Customprofileicon";

export default function Commentitem({ commentData, API_BASE_URL }) {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      const response = await fetch(`
        ${API_BASE_URL}/Elizabethcodes44/contact/${commentData.contactId}`
      );

      if (response.ok) {
        const data = await response.json();
        setAuthorData(data);
      } else {
        console.error("Error fetching author data:", response.statusText);
      }
    };

    fetchAuthorData();
  }, [API_BASE_URL, commentData.contactId]);

  return (
    <li className="commentitem">
      <CustomProfileIcon contactPerson={authorData} />
      <div className="commentcontent">
        <h4>
          {`${authorData?.firstName || "Loading..."} ${
            authorData?.lastName || ""
          }`}
        </h4>
        <p>{commentData.content}</p>
      </div>
    </li>
  );
}