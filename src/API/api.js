const BASE_URL = "https://boolean-api-server.fly.dev/Enock97";

// Posts API Utilities
const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/post`);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
};

const fetchPostById = async (postId) => {
  const response = await fetch(`${BASE_URL}/post/${postId}`);
  if (!response.ok) throw new Error(`Failed to fetch post with ID ${postId}`);
  return await response.json();
};

const addPost = async (post) => {
  const response = await fetch(`${BASE_URL}/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to add new post");
  return await response.json();
};

const updatePost = async (postId, post) => {
  const response = await fetch(`${BASE_URL}/post/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error(`Failed to update post with ID ${postId}`);
  return await response.json();
};

const deletePost = async (postId) => {
  const response = await fetch(`${BASE_URL}/post/${postId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete post with ID ${postId}`);
  return await response.json();
};

// Comments API Utilities
const fetchComments = async (postId) => {
  const response = await fetch(`${BASE_URL}/post/${postId}/comment`);
  if (!response.ok)
    throw new Error(`Failed to fetch comments for post ID ${postId}`);
  return await response.json();
};

const addComment = async (postId, comment) => {
  const response = await fetch(`${BASE_URL}/post/${postId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  if (!response.ok)
    throw new Error(`Failed to add comment to post ID ${postId}`);
  return await response.json();
};

const updateComment = async (postId, commentId, comment) => {
  const response = await fetch(
    `${BASE_URL}/post/${postId}/comment/${commentId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    }
  );
  if (!response.ok)
    throw new Error(
      `Failed to update comment with ID ${commentId} for post ID ${postId}`
    );
  return await response.json();
};

const deleteComment = async (postId, commentId) => {
  const response = await fetch(
    `${BASE_URL}/post/${postId}/comment/${commentId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok)
    throw new Error(
      `Failed to delete comment with ID ${commentId} for post ID ${postId}`
    );
  return await response.json();
};

// Contacts API Utilities
const fetchContacts = async () => {
  const response = await fetch(`${BASE_URL}/contact`);
  if (!response.ok) throw new Error("Failed to fetch contacts");
  return await response.json();
};

const fetchContactById = async (contactId) => {
  const response = await fetch(`${BASE_URL}/contact/${contactId}`);
  if (!response.ok)
    throw new Error(`Failed to fetch contact with ID ${contactId}`);
  return await response.json();
};

const addContact = async (contact) => {
  const response = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  if (!response.ok) throw new Error("Failed to add new contact");
  return await response.json();
};

const updateContact = async (contactId, contact) => {
  const response = await fetch(`${BASE_URL}/contact/${contactId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  if (!response.ok)
    throw new Error(`Failed to update contact with ID ${contactId}`);
  return await response.json();
};

const deleteContact = async (contactId) => {
  const response = await fetch(`${BASE_URL}/contact/${contactId}`, {
    method: "DELETE",
  });
  if (!response.ok)
    throw new Error(`Failed to delete contact with ID ${contactId}`);
  return await response.json();
};

export {
  fetchPosts,
  fetchPostById,
  addPost,
  updatePost,
  deletePost,
  fetchComments,
  addComment,
  updateComment,
  deleteComment,
  fetchContacts,
  fetchContactById,
  addContact,
  updateContact,
  deleteContact,
};
