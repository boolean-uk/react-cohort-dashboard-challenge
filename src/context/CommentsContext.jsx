import { useState, createContext, useEffect, useContext } from "react"

const CommentsContext = createContext({
	comments: [],
	setComments: () => {},
})

function CommentsProvider({ children, postId }) {
	const [comments, setComments] = useState(null)

	useEffect(() => {
		if (postId) {
			fetch(
				`https://boolean-api-server.fly.dev/PerikK/post/${postId}/comment`
			)
				.then((response) => response.json())
				.then(setComments)
		}
	}, [postId])

	const postComment = (comment) => {
		fetch(
			`https://boolean-api-server.fly.dev/PerikK/post/${postId}/comment`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
			}
		)
			.then((response) => response.json())
			.then((newComment) => {
				setComments((prevComments) => [...prevComments, newComment])
			})
	}

	const value = {
		comments,
		setComments,
		postComment,
    }
    
      return (
    <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>
  )
}
export {CommentsContext, CommentsProvider}
