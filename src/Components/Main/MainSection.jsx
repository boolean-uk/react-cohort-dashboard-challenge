import { useContext } from "react";
import FeaturesMain from './FeaturesMain/FeatureMain';
import { PostContext } from "../../App";


export default function Main() {
    const { posts } = useContext(PostContext)

    return (
        <main className="main">
            {/* Rendering the FeaturesMain component for PostCreate */}
            <FeaturesMain cardType={'PostCreate'} />
            
            {/* Rendering FeaturesMain components for each post */}
            {posts.sort((a, b) => b.id - a.id).map((e) => (
                <FeaturesMain
                    key={`post-feature-${e.id}`}
                    cardType={'Post'}
                    id={String(e.id)} // Pass the id prop for each post
                />
            ))}
        </main>
    );
}

