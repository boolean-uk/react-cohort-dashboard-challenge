import axios from "axios";

const instance = axios.create({
  baseURL: "https://boolean-api-server.fly.dev/uprising5034",
});

function pathBuild(...pathSegments) {
  return pathSegments.join("/")
}

async function getTemplate(url) {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function postTemplate(url, data) {
  try {
    const response = await instance.post(url, data)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}

class Contact {
  get(id) {
    const url = id ? `contact/${id}` : "contact";
    return getTemplate(url);
  }

  post(id, )
}

class API {
  contact = new Contact();
}

const api = new API();

console.log("api.contact.get()", await api.contact.get(1));

const test = pathBuild(1, 2, 3)

console.log('test', test)
