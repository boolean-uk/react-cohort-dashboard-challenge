import { useContext } from "react";
import { MyContext } from "../App";

import '../App.css';


function Posts() {

    const context = useContext(MyContext)

    return (
        <main className="main">

        {/* CreatePost */}
        


          {context.posts.map((post, index) => (
              <div key={index} className="post-body-background">
                <h3 className="post-content">{post.name}</h3>
                <p className="post-content">{post.content}</p>
                
              </div>
            ))}

        </main>
    )
}

export default Posts