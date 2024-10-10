import Post from "./post"
export default function Post_List({posts}){

    //const posts=[1,2,3]
    return (
        <div className="post_list">
            {posts.map((post, index) => <Post post={post} key={index} num={index} />)}

        </div>
        
        
    )
}