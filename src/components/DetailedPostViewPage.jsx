import { useEffect } from "react";

function DetailedPostViewPage() {
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;
  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const sortedPosts = data.sort((a, b) => b.id - a.id);
      setPostsList(sortedPosts);
    } catch (er) {
      console.log("OBS!!! Something went wrong retrieving Posts from DB");
    }
  };
  return (
    <>
      <h1>HELLO WORLD</h1>
      <p>DetailedPostViewPage</p>
    </>
  );
}

export default DetailedPostViewPage;
