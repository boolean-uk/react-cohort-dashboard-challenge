export default function Author(props) {
    const { post, authors } = props

    const authorFound = authors.find(author => author.id === post.contactId)

    return (
        <div className="author">
        {authorFound &&
            <>
                <figure>
                    <figcaption>
                        {authorFound.firstName[0]}{authorFound.lastName[0]}
                    </figcaption>
                </figure>

                <div className="name-title">
                    <h4>
                        {authorFound.firstName} {authorFound.lastName}
                    </h4>

                    <b>{post.title}</b>
                </div>
            </>
        }    
        </div>
    )
}