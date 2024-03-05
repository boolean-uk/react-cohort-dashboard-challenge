export const BASE_URL = "https://boolean-api-server.fly.dev/najemhamo"; // API URL

const DEFAULT_FETCH_OPTIONS = {
  method: "GET",
};

const HEADERS = {
  "Content-Type": "application/json",
};

export const getRequest = async (urlPath) => await sendRequest(urlPath);

export const postRequest = async (urlPath, payload) => {
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload),
  };
  return await sendRequest(urlPath, options);
};

export const deleteRequest = async (urlPath) => {
  const options = {
    method: "DELETE",
  };
  return await sendRequest(urlPath, options);
};

export const updateRequest = async (urlPath, payload) => {
  const options = {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(payload),
  };
  return await sendRequest(urlPath, options);
};

const sendRequest = async (urlPath, fetchOptions = DEFAULT_FETCH_OPTIONS) => {
  try {
    const res = await fetch(`${BASE_URL}${urlPath}`, fetchOptions);
    const data = await res.json();
    if (data.error) {
      return { data: null, error: data.error };
    } else {
      return { data: data, error: null };
    }
  } catch (err) {
    return { data: null, error: err };
  }
};
