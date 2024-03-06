import { useState } from "react";

function CallApi(API_URL, setContent) {
  useState(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      });
  }, []);
}

// POST
const handleCreate = (formData, API_URL, setContent, content, navigate) => {
  formData.longitude = parseFloat(formData.longitude);
  formData.latitude = parseFloat(formData.latitude);

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(API_URL, postOptions)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Something went wrong! Status: ${res.status}`);
    })
    .then((newContent) => {
      setContent([...content, newContent]);
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleDelete = (id, API_URL, content, setContent, navigate) => {
  const DEL_URL = API_URL + "/" + id;

  const deleteOptions = {
    method: "DELETE",
    url: DEL_URL,
  };

  let updatedList = content.filter((item) => {
    if (parseInt(item.id) !== parseInt(id)) return item;
  });

  fetch(DEL_URL, deleteOptions)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Something went wrong! Status: ${res.status}`);
    })
    .then(() => {
      setContent([...updatedList]);
      navigate("/");
    })
    .catch((err) => {
      console.log("error occured: ", err);
    });
};

// UPDATE
const handleUpdate = (formData, content, API_URL, setContent, navigate) => {
  formData.longitude = parseFloat(formData.longitude);
  formData.latitude = parseFloat(formData.latitude);

  let updatedList = content.map((item) => {
    if (parseInt(item.id) === parseInt(formData.id)) {
      return { ...item, ...formData };
    }
    return item;
  });

  const PUT_URL = API_URL + "/" + formData.id;

  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(PUT_URL, putOptions)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Something went wrong! Status: ${res.status}`);
    })
    .then(() => {
      setContent([...updatedList]);
      navigate("/");
    })
    .catch((err) => {
      console.log("error occured: ", err);
    });
};

export { CallApi, handleCreate, handleDelete, handleUpdate };
