import CreatePost from "./CreatePost"
import Posts from "./Posts"


export default function Main() {
	return (
		<div className='flex flex-col gap-3 m-3'>
			<CreatePost />
			<Posts />
		</div>
	)
}
