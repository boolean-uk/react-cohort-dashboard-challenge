import axios from "axios";

const instance = axios.create({
  baseURL: "https://boolean-api-server.fly.dev/uprising5034",
});

async function getTemplate(url) {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

class Contact {
  get(id) {
    const url = id ? `contact/${id}` : "contact";
    return getTemplate(url);
  }
}

class API {
  contact = new Contact();
}

const api = new API();

// console.log(await api.contact.get());
// console.log("await getTemplate()", await getTemplate("contact/1"));
console.log("api.contact.get()", await api.contact.get(1));
