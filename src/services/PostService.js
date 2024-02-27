import axios from "axios";

const BASE_API_URL = "https://boolean-api-server.fly.dev/Sabbasn/";

export const getAllPosts = async (setPosts) => {
  const { data } = await axios.get(BASE_API_URL + "post");
  setPosts(data);
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
  console.log(comment);
  const { data } = await axios.post(
    BASE_API_URL + `post/${comment.postId}/comment`,
    comment
  );
  return data;
};
