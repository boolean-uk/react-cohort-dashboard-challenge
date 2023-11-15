import { useParams } from "react-router-dom";

export default function SinglePostPage() {
    const { id } = useParams()

    return (
        <div className="single-post-page">
            <div className="single-post-page-header">
                <h1>Single Post Page</h1>
                <p>This is the single post page : { id }</p>
                
                </div>
        </div>
    )
}