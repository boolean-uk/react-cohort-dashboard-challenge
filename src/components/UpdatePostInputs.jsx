import { useContext } from "react"
import { UpdatePostContext } from "./UpdatePost"

export default function UpdatePostInputs() {
    const { handleChange, updatePost, updatedPost  } = useContext(UpdatePostContext)

    return (
        <section>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange}
                    value={updatePost.title}
                    placeholder={updatedPost.title}
                    required
                />
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <input 
                    type="text" 
                    name="content"
                    onChange={handleChange}
                    value={updatePost.content}
                    placeholder={updatedPost.content}
                    required
                />
            </div>

            <button type="submit">Save</button>
        </section>
    )
}