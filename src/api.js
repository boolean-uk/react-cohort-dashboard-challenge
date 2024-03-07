import axios from 'axios';

const INSTANCE = axios.create({
  baseURL: "https://boolean-api-server.fly.dev/azizzafar/",
});

export const getAllPosts = async () => {
  try {
    const response = await INSTANCE.get("post");
    return response.data;
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
};


export async function getContacts(contactId) {
  const url = contactId ? `/contact/${contactId}` : '/contact'; 

  try {
    const response = await INSTANCE.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function getCommentById(postId) {
  const url = `/post/${postId}/comment`;

  try {
      const response = await INSTANCE.get(url);
      return response.data;
  } catch (error) {
      console.error(error);
  }
}

export const getCommentById_fix = async (postId) => {
  try {
    const response = await INSTANCE.get(`post/${postId}/comment`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments for post:", error);
    throw error;
  }
};

export const createPost = async (title, content, contactId) => {
  try {
    const response = await INSTANCE.post("post", { contactId, title, content });
    return response.data;
  } catch (error) {
    console.error("Error submitting post:", error);
    throw error;
  }
};

export const createComment = async (postId, content, contactId) => {
  try {
    const response = await INSTANCE.post(`post/${postId}/comment`, { postId, contactId, content});
    return response.data;
  } catch (error) {
    console.error("Error submitting comment:", error);
    throw error;
  }
};


export const updatePost = async (text) => {
  return { text };
};

export async function deletePost(postId) {
  try {
      const response = await INSTANCE.delete(`/post/${postId}`);
      return response.data;
  } catch (error) {
      console.error(error);
  }
}

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};