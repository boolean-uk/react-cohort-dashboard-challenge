import { useParams } from "react-router-dom"
import usePosts from "../hooks/usePosts"
import useUsers from "../hooks/useUsers"
import Avatar from "./Avatar"
import Comments from "./Comments"

export default function SinglePostPage() {
	const { id } = useParams()
    const { posts } = usePosts()
    const {users} = useUsers()

	if (!posts) {
		return <p>Loading</p>
    }
    
    const postToDisplay = posts.find((post) => post.id === Number(id))
    const poster = users.find((user)=> user.id === postToDisplay.contactId )
    console.log(postToDisplay);
    console.log(typeof(postToDisplay.contactId));

	return (
        <div className="flex flex-col mx-16 my-10 p-10 bg-white">
            <div className='my-10 flex items-center text-3xl font-semibold'>
                <Avatar userId={postToDisplay.contactId} />
                <h1>{` ${poster.firstName} ${poster.lastName} `}</h1>
            </div>
            <p>{postToDisplay.content}</p>
            <hr className='h-px text-stone-50 m-10 ' />
            <div className="mt-10">
                <Comments post={postToDisplay}/>
            </div>
		</div>
	)
}
