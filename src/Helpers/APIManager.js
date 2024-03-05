import axios from "axios";
const BASE_URL = "https://boolean-api-server.fly.dev/andreSturesson";

//POSTS
export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/post`);
  return response.data;
}

export async function createPost(post) {
  const response = await axios.post(`${BASE_URL}/post`, post, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export async function getComments(postId) {
  const response = await axios.get(`${BASE_URL}/post/${postId}/comment`);
  const data = response.data;
  const commentsWithContact = [];
  for (const comment of data.reverse()) {
    const contact = await getContactById(comment.contactId);
    const commentWithContact = { ...comment, contact };
    commentsWithContact.push(commentWithContact);
  }
  return commentsWithContact;
}

export async function createComment(comment, postId) {
  const response = await axios.post(
    `${BASE_URL}/post/${postId}/comment`,
    comment,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

//USERS / CONTACT

export async function getContactById(id) {
  const response = await axios.get(`${BASE_URL}/contact/${id}`);
  return response.data;
}

export async function getContacts() {
  const response = await axios.get(`${BASE_URL}/contact`);
  return response.data;
}

export async function getContactByEmail(email) {
  const response = await getContacts();
  return response.find((contact) => contact.email === email);
}
