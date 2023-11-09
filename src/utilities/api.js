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
}

class API {
  contact = new Contact();
}

const api = new API();

// ===========================

const data = {
  firstName: "test",
  lastName: "test",
  street: "test",
  city: "test",
}

await api.contact.post(data)

console.log("api.contact.get()", await api.contact.get());