const API_URL = 'https://boolean-uk-api-server.fly.dev/iscreamvann';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/post`);
  return response.json();
};

export const fetchPost = async (id) => {
  const response = await fetch(`${API_URL}/post/${id}`);
  return response.json();
};

export const fetchComments = async (id) => {
  const response = await fetch(`${API_URL}/post/${id}/comment`);
  return response.json();
};

export const fetchContact = async (id) => {
  const response = await fetch(`${API_URL}/contact/${id}`);
  return response.json();
};

export const fetchContacts = async () => {
  const response = await fetch(`${API_URL}/contact`);
  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${API_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const createComment = async (comment) => {
  const response = await fetch(`${API_URL}/post/${comment.postId}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  return response.json();
};
