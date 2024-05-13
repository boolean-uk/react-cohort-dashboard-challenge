export default function AddComment(props) {
    const { randomAuthor } = props

    return (
        <div className="add-comment">
            {randomAuthor &&
                <>
                    <figure>
                        <figcaption>
                            {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                        </figcaption>
                    </figure>

                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Add a comment..."
                    />
                </>
            }
        </div>
    )
}