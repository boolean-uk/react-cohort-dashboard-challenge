const BASE_URL = "https://boolean-uk-api-server.fly.dev/SimpFred";

const getApiUrl = (endpoint) => `${BASE_URL}/${endpoint}`;

export const getAll = async (endpoint) => {
  const response = await fetch(getApiUrl(endpoint));
  const data = await response.json();
  return data;
};

export const create = async (endpoint, item) => {
  const response = await fetch(getApiUrl(endpoint), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

export const update = async (endpoint, id, updatedItem) => {
  const response = await fetch(getApiUrl(`${endpoint}/${id}`), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  });
  const data = await response.json();
  return data;
};

export const remove = async (endpoint, id) => {
  const response = await fetch(getApiUrl(`${endpoint}/${id}`), {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
