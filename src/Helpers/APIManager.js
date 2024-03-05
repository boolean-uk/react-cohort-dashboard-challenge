import axios from "axios";
const BASE_URL = "https://boolean-api-server.fly.dev/andreSturesson";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request aborted:", error);
      // Handle ECONNABORTED error here (e.g., display message, retry logic)
      // You can throw a custom error to propagate it further
      throw new Error("Request Aborted");
    }
    // Handle other errors here
    return Promise.reject(error);
  }
);

const handleError = (error) => {
  console.error(error);
  throw error;
};

// POSTS
export async function getPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/post`);
    const posts = response.data;
    posts.reverse();
    return posts;
  } catch (error) {
    handleError(error);
  }
}

export async function createPost(post) {
  try {
    const response = await axios.post(`${BASE_URL}/post`, post, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getComments(postId) {
  try {
    const response = await axios.get(`${BASE_URL}/post/${postId}/comment`);
    const data = response.data;
    return data.reverse();
  } catch (error) {
    handleError(error);
  }
}

export async function createComment(comment, postId) {
  try {
    const response = await axios.post(
      `${BASE_URL}/post/${postId}/comment`,
      comment,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    const commentsWithContact = [];
    const contact = await getContactById(data.contactId);
    commentsWithContact.push({ ...data, contact });
    console.log("commentsWithContact", commentsWithContact);
    return commentsWithContact;
  } catch (error) {
    handleError(error);
  }
}

// USERS / CONTACT

export async function getContactById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/contact/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getContacts() {
  try {
    const response = await axios.get(`${BASE_URL}/contact`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getContactByEmail(email) {
  try {
    const contacts = await getContacts();
    return contacts.find((contact) => contact.email === email);
  } catch (error) {
    handleError(error);
  }
}
