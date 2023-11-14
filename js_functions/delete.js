export default function deleteData(path) {
    const options = {
      method: "DELETE"
    }
    fetch(`https://boolean-api-server.fly.dev/Chloe0701962/${path}` ,options)
    .then(r => r.json())
    .catch(error => error)
  }