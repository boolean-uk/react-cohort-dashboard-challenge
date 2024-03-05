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

//postCommentPayload
// {
//   "postId": 10,
//   "content": "You should get a decaff!",
//   "contactId": 13
// }
function postCommentToPost(postId, content, contactId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}/comment`;
  const payload = {
    postId: postId,
    content: content,
    contactId: contactId,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return fetch(url, options);
}

export { getPostById, postCommentToPost, getCommentForPost, getUserById };
