import axios from "axios";

const instance = axios.create({
  baseURL: "https://boolean-api-server.fly.dev/uprising5034",
});

function pathBuild(...pathSegments) {
  const pathFilter = pathSegments.filter(segment => segment !== undefined && segment !== null)
  return pathFilter.join("/");
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
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function putTemplate(url, data) {
  try {
    const response = await instance.put(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

class Contact {
  #path = "contact"
  get(id) {
    const url = pathBuild(this.#path, id)
    return getTemplate(url);
  }

  post(data) {
    const url = pathBuild(this.#path)
    return postTemplate(url, data)
  }

  put(id, data) {
    const url = pathBuild(this.#path, id)
    return putTemplate(url, data)
  }
}

class API {
  contact = new Contact();
}

const api = new API();

// ===========================

const data = {
  firstName: "test1",
  lastName: "test1",
  street: "test1",
  city: "test1",
  email: "test1"
}

await api.contact.put(16,data)

console.log("api.contact.get()", await api.contact.get());