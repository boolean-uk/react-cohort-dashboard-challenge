function AuthorName({author}) {
    let name = ""

    if (author) {
        name = `${author.firstName} ${author.lastName}`
    }

    return (
        <span>{name}</span>
    )
}

export default AuthorName