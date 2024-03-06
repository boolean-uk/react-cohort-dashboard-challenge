import { baseContectURL, basePostURL } from "./urls.js";

export const fetchFirstContact = async () => {
  console.log("GETCHFIRSTCONTACT");
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

export const fetchDataForComments = async (postId) => {
  try {
    const response = await fetch(`${basePostURL}/${postId}/comment`);

    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const comments = data;
    // Fetch user information for each comment
    const userIds = comments.map((comment) => comment.contactId);
    const usersResponse = await Promise.all(
      userIds.map((userId) => fetch(`${baseContectURL}/${userId}`))
    );
    const users = await Promise.all(
      usersResponse.map((response) => response.json())
    );

    return { comments, users };
  } catch (error) {
    console.log(
      `OBS!!! Something went wrong retrieving comments for ${postId}`
    );
  }
};

export const postData = async (URL, payload) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Failed to add data: ${response.statusText}`);
      return false;
    }

    console.log("Data added successfully!");
    return true;
  } catch (er) {
    console.error("OBS!!! Something went wrong:", er.message);
    return false;
  }
};
