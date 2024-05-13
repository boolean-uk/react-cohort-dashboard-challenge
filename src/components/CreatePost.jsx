export default function CreatePost(props) {
    const { randomAuthor } = props

    return (
        <section>
            {randomAuthor &&
                <>
                    <figure>
                        <figcaption>
                            {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                        </figcaption>
                    </figure>

                    <form action="">
                        <div>
                            <input 
                                type="text" 
                                name="" 
                                id="" 
                                placeholder="Title"
                            />

                            <input 
                                type="text" 
                                name="" 
                                id="" 
                                placeholder="What's on your mind?"
                            />
                        </div>

                        <button type="submit">Post</button>
                    </form>
                </>
            }
        </section>
    )
}