const API_URL = 'https://boolean-uk-api-server.fly.dev/brandsegg/post';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}`);
  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const fetchPost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const fetchComments = async (postId) => {
  const response = await fetch(`${API_URL}/${postId}/comments`);
  return response.json();
};