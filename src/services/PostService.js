import axios from "axios";

const BASE_API_URL = "https://boolean-api-server.fly.dev/Sabbasn/";

export const getAllPosts = async (setPosts) => {
  const { data } = await axios.get(BASE_API_URL + "post");
  setPosts(data);
  return data;
};

export const getPost = async (id) => {
  const { data } = await axios.get(BASE_API_URL + `post/${id}`);
  return data;
};

export const getAllComments = async (postId) => {
  const { data } = await axios.get(BASE_API_URL + `post/${postId}/comment`);
  return data;
};

export const createPost = async (post) => {
  const { data } = await axios.post(BASE_API_URL + "post", post);
  return data;
};

export const createComment = async (comment) => {
  const { data } = await axios.post(
    BASE_API_URL + `post/${comment.postId}/comment`,
    comment
  );
  return data;
};

export const getContact = async () => {
  const { data } = await axios.get(BASE_API_URL + "contact/1");
  return data;
};

export const putContact = async (contact) => {
  const { data } = await axios.put(BASE_API_URL + "contact/1", contact);
  return data;
};
