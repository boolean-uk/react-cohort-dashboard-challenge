export default function deleteData(path, setReloadData, reloadData) {
    const options = {
      method: "DELETE",
    }
    fetch(`https://boolean-api-server.fly.dev/Chloe0701962/${path}` ,options)
    .then(r => r.json())
    .catch(error => error)
    .then(() => setReloadData(!reloadData))
  }