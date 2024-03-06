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
function getAllPosts() {
  const url = `https://boolean-api-server.fly.dev/martenere/post`;
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

function updateUser(userId, userObject) {
  // Example Payload /How the userObject should be structured
  // {
  //   "firstName": "Rick",
  //   "lastName": "Sanchez",
  //   "street": "Morty Lane",
  //   "city": "Jerryville",
  //   "gender": "Male",
  //   "email": "rick@sanchez.com",
  //   "jobTitle": "Scientist",
  //   "latitude": 42,
  //   "longitude": 629,
  //   "favouriteColour": "#0d7f26",
  //   "profileImage": "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
  // }

  const url = `https://boolean-api-server.fly.dev/martenere/contact/${userId}`;
  const options = putOptions(userObject);

  return fetch(url, options);
}

const postOptions = (payload) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
};
const putOptions = (payload) => {
  return {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
};

function resetApiData() {
  const url = "https://boolean-api-server.fly.dev/martenere/admin";
  const delOptions = { method: "DELETE" };

  fetch(url, delOptions)
    .then((res) => {
      console.log(res), res.json();
    })
    .then((data) => console.log(data));
}

export {
  updateUser,
  resetApiData,
  getAllPosts,
  postNewPost,
  getPostById,
  postCommentToPost,
  getCommentForPost,
  getUserById,
};
