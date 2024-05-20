import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Comments from "./Comments"

export default function Post({ post, posterId }) {
	const [poster, setPoster] = useState(null)

	useEffect(() => {
		if (posterId) {
			fetch(
				`https://boolean-api-server.fly.dev/PerikK/contact/${posterId}`
			)
				.then((response) => response.json())
				.then(setPoster)
		}
	}, [posterId])

	if (!poster || !poster.firstName) return null

	return (
		<li className='rounded-md bg-[#fff] border border-stone-400 px-4 py-2'>
			<div className='flex items-center justify-start px-6  h-20 '>
				<Avatar userId={posterId} />
				<div>
					<p>{`${poster.firstName} ${poster.lastName} `}</p>
					<Link to={`/post/${post.id}`}>
					<p className=' text-sm text-[#000046] hover:text-slate-400 '>{post.title}</p>
					</Link>
				</div>
			</div>
			<p>{post.content}</p>
			<hr className='h-px text-stone-50 m-5 ' />
			<Comments post={post} />
		</li>
	)
}
