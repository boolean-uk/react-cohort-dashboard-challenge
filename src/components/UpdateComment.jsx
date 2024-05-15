import { useParams } from "react-router-dom"

export default function UpdateComment() {
    const { id } = useParams()

    return (
        <form className="update-comment">
            <h1>Comment</h1>

            <section>
                <label htmlFor="content">Content</label>
                <input 
                    type="text" 
                    name="content" 
                />
            </section>
        </form>
    )
}