import { useEffect, useState } from "react";

function PostsListItem(props) {
  const { post } = props;

  const [currentContact, setCurrentContact] = useState(null);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;
  console.log("POST: ", post.contactId);
  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await fetch(URL + `${post.contactId}`);

        if (!response.ok) {
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = response.json();
      } catch (er) {
        console.log("OBS!!! Something went wrong retrieving post owner");
      }
    };
  });
  return <></>;
}

export default PostsListItem;
