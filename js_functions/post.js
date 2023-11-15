export default function postData(path, data) {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify(data),
  };

  fetch(`https://boolean-api-server.fly.dev/Chloe0701962/${path}`, options)
    .then((r) => r.json())
    .catch((error) =>
      console.log("An error occured while fetching data:", error)
    );
}
