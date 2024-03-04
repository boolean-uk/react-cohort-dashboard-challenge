const BASE_URL = "https://boolean-api-server.fly.dev/andreSturesson";

//POSTS
export async function getPosts() {
  const response = await fetch(`${BASE_URL}/post`);
  return await response.json();
}

export async function createPost(post) {
  const response = await fetch(`${BASE_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return await response.json();
}

export async function getComments(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comment`);
  return await response.json();
}

export async function createComment(comment) {
  const response = await fetch(`${BASE_URL}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  return await response.json();
}

//USERS / CONTACT

export async function getContactById(id) {
  const response = await fetch(`${BASE_URL}/contact/${id}`);
  return await response.json();
}

export async function getContacts() {
  const response = await fetch(`${BASE_URL}/contact`);
  return await response.json();
}
