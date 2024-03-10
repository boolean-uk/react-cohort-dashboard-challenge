import { useContext } from "react"
import { AppContext } from "../../App"
import MainItem from "./MainItem"
import Post from "./Post" 

export default function Main(){
    const {posts} = useContext(AppContext)
            
    return (
        <>
            <div className="main-container">
                <Post/>
                { 
                    posts.map((p, index) => <MainItem key={index} post={p} hide={true}/>)
                }                
            </div>
        </>
    )
}