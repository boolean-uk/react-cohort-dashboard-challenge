import React, { useContext, useState } from "react";
import { PostPartialProps } from "../common/types";
import { PostsContext } from "./Posts";

export default function CreatePostForm() {
  const [posts, setPosts] = useContext(PostsContext);
  const [postContent, setPostContent] = useState("");

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://boolean-uk-api-server.fly.dev/hermagst/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "no title",
        content: postContent,
        contactId: 1,
      }),
    })
      .then((res) => res.json())
      .then((body: PostPartialProps) => {
        setPosts([...posts, body]);
        setPostContent("");
      });
  };

  return (
    <form onSubmit={createPost} className="flex-grow flex items-center">
      <input
        type="text"
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPostContent(e.target.value)
        }
        className="flex-grow bg-gray-100 rounded-md py-2 px-4 focus:outline-none placeholder:text-[#6c6c92]"
      />
      <button
        type="submit"
        className="ml-4 bg-[#000046] text-white px-14 py-3 rounded-md hover:bg-[#64dc78]"
      >
        Post
      </button>
    </form>
  );
}
