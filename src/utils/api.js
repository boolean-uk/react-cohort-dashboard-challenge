import { baseContectURL } from "./urls.js";

export const fetchFirstContact = async () => {
  try {
    const response = await fetch(baseContectURL);

    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();

    const firstContact = data[0];

    if (firstContact) {
      console.log(firstContact);
      const { firstName, lastName, id } = firstContact;
      localStorage.setItem("userFirstName", firstName);
      localStorage.setItem("userLastName", lastName);
      localStorage.setItem("contactId", id);

      return firstContact;
    } else {
      return null;
    }
  } catch (er) {
    console.error("Error fetching first contact:", er);
    return null;
  }
};

export const fetchDataByContactId = async (contactId) => {
  try {
    const response = await fetch(`${baseContectURL}/${contactId}`);

    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (er) {
    console.error("Error fetching first contact:", er);
    return null;
  }
};
