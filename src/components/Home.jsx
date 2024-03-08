import { useContext } from 'react';
import { MyContext } from '../App'

function Home() {

    const context = useContext(MyContext) 
    return (
        <div>
            <h1>Home Page</h1>
            {/* {context.posts.map((post, index) => (
                <div key={index}>
                    <h3>{post.name}</h3>
                </div>
            ))} */}
        </div>
    );
}

export default Home;
