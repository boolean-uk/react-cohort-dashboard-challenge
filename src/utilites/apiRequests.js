const BASE_URL = "https://boolean-api-server.fly.dev/LinusWillmont";

const getRequest = (url) => {
  // console.log("Getting data from", url);
  return fetch(BASE_URL + url)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to fetch data ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.error("Error during GET request", error));
};

const postRequest = (url, body) => {
  // console.log("Payload", JSON.stringify(body));
  return fetch(BASE_URL + url, {
    method: "POST",
    body: JSON.stringify({ ...body }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to post data ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.error("Error during POST request", error));
};

const putRequest = (url, body) => {
  // console.log("Payload", JSON.stringify(body));
  return fetch(BASE_URL + url, {
    method: "PUT",
    body: JSON.stringify({ ...body }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to PUT data ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.error("Error during PUT request", error));
};

const deleteRequest = (url) => {
  return fetch(BASE_URL + url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to DELETE data ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.error("Error during DELETE request", error));
};

export { getRequest, postRequest, putRequest, deleteRequest };
