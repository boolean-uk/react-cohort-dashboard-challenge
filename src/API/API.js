function getUserById(id) {
  const url = `https://boolean-api-server.fly.dev/martenere/contact/${id}`;
  return fetch(url);
}
function getCommentForPost(postId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}/comment`;
  return fetch(url);
}

function getPostById(postId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}`;
  return fetch(url);
}

function postCommentToPost(postId, content, contactId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}/comment`;
  // EXANPLE comment payload
  //  {
  //   "postId": 10,
  //   "content": "You should get a decaff!",
  //   "contactId": 13
  //  }
  const payload = {
    postId: postId,
    content: content,
    contactId: contactId,
  };
  const options = postOptions(payload);
  return fetch(url, options);
}

function postNewPost(content) {
  const url = `https://boolean-api-server.fly.dev/martenere/post`;
  // Example POST payload
  // {
  //   "title": "I bought a new coffee machine",
  //   "content": "It's the best thing I've ever done!",
  //   "contactId": 42,
  //
  // }
  const payload = {
    title: "New Post",
    content: content,
    contactId: 1, // TODO: bind to a user
  };

  const options = postOptions(payload);
  return fetch(url, options);
}

const postOptions = (payload) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
};

export {
  postNewPost,
  getPostById,
  postCommentToPost,
  getCommentForPost,
  getUserById,
};
