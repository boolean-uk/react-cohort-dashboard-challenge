export default function getData (path, setData) {
    fetch(`https://boolean-api-server.fly.dev/Chloe070196/${path}`)
      .then((r) => r.json())
      .then((data) => setData(data))
  }

 