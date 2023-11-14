export default function getData (path, setData) {
    fetch(`https://boolean-api-server.fly.dev/Chloe0701962/${path}`)
      .then((r) => r.json())
      .then((data) => setData(data))
  }

 