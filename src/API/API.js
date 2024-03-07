// All fetch variants collected in one place, to declutter components, returns the initial fetch promise

//Define postOptions that takes payload and returns options object
const postOptions = (payload) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
};

const delOptions = () => {
  return { method: "DELETE" };
};
const putOptions = (payload) => {
  return {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
};

// Api calls
function getAllPosts() {
  const url = `https://boolean-api-server.fly.dev/martenere/post`;
  return fetch(url);
}
function getPostById(postId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}`;
  return fetch(url);
}

function createPost(content) {
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
function UpdatePost(postId, originalPost, newContent) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}`;
  const payload = {
    title: originalPost.title,
    content: newContent,
    contactId: originalPost.contactId,
  };
  const Options = putOptions(payload);

  return fetch(url, Options);
}

function DeletePostById(postId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}`;

  return fetch(url, delOptions());
}
function getUserById(id) {
  const url = `https://boolean-api-server.fly.dev/martenere/contact/${id}`;
  return fetch(url);
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

function getAllCommentForPost(postId) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${postId}/comment`;
  return fetch(url);
}
function createComment(postId, content, contactId) {
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

function updateComment(OriginalComment, newCommentText) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${OriginalComment.postId}/comment/${OriginalComment.id}`;
  const payload = {
    postId: OriginalComment.postId,
    content: newCommentText,
    contactId: OriginalComment.contactId,
  };
  const options = putOptions(payload);
  return fetch(url, options);
}
function deleteComment(comment) {
  const url = `https://boolean-api-server.fly.dev/martenere/post/${comment.postId}/comment/${comment.id}`;
  return fetch(url, delOptions());
}

function resetApiData() {
  const url = "https://boolean-api-server.fly.dev/martenere/admin";

  fetch(url, delOptions())
    .then((res) => {
      console.log(res), res.json();
    })
    .then((data) => console.log(data));
}
export {
  deleteComment,
  updateComment,
  UpdatePost,
  DeletePostById,
  updateUser,
  resetApiData,
  getAllPosts,
  createPost as postNewPost,
  getPostById,
  createComment as postCommentToPost,
  getAllCommentForPost as getCommentForPost,
  getUserById,
};
