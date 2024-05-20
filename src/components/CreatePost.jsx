import { useState } from "react"
import usePosts from "../hooks/usePosts"
import useUsers from "../hooks/useUsers"
import Avatar from "./Avatar"


export default function CreatePost() {
	const {currentUser} = useUsers()
	const { posts, setPosts } = usePosts()
	const [newPost, setNewPost] = useState({
		title: "",
		content: "",
		contactId: currentUser.id,
	})

	if (!posts) {
		return <p>Loading</p>
	}
	const userId = 1

	function handleChange(e) {
		const { value } = e.target
		const title = value.split(" ").slice(0, 6).join(" ")

		setNewPost({
			...newPost,
			content: value,
			title: title,
			contactId: currentUser.id,
		})
	}

	async function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const response = await fetch("https://boolean-api-server.fly.dev/PerikK/post", options);
      const data = await response.json();

      setPosts([...posts, data]);

      setNewPost({
        title: "",
        content: "",
        contactId: 1,
      });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  }

	return (
		<div className='flex flex-row flex-nowrap bg-[#fff] border border-stone-400 rounded-md my-6 py-4 size-full px-6   '>

			<div className="m-2">
			<Avatar userId={userId}/>
			</div>


			<form
				onSubmit={handleSubmit}
				className='flex flex-grow  '
			>
				<input
					type='text'
					placeholder="What's on your mind?"
					name='content'
					onChange={handleChange}
					value={newPost.content}
					className='border-2 basis-4/4 bg-[#e6ebf5] w-10/12 p-3 h-full hover:border-[#000046]'
				/>

				<button className='inline-flex justify-center py-3 px-14 ml-20 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#000046] hover:bg-[#64dc78]'>
					Post
				</button>
			</form>
		</div>
	)
}
