import Post from "../Post"

export default function PostList(props) {
    console.log('Posts:', props.posts)
    return (
        <div>
        {props.posts.map((post) => {return <Post post={post}/>})}

        </div>

    )
}