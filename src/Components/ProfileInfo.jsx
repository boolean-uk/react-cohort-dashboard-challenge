import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthorContext } from "../App"

export default function ProfileInfo()
{
    const { authors, editAuthor } = useContext(AuthorContext)
    const {id} = useParams()
    const author = authors[id - 1]

    const INITIAL_AUTHOR =
    {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        street: "",
        city: ""
    }
    const [newAuthor, setNewAuthor] = useState(INITIAL_AUTHOR)
    const [updateAuthor, setUpdateAuthor] = useState(INITIAL_AUTHOR)
    const initials = author.firstName.charAt(0) + author.lastName.charAt(0)

    // PUT an updated author
    useEffect(() =>
    {
        const putOptions =
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAuthor)
        }
        
        fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${newAuthor.id}`, putOptions)
        .then((response) => response.json())
        .then(() => setNewAuthor(INITIAL_AUTHOR))
    }, [updateAuthor])


    const handleInput = (event) =>
    {
        const {name, value} = event.target
        setNewAuthor({...newAuthor, [name]: value, id: author.id})
    }

    const handleClick = () =>
    {
        if (newAuthor.firstName.length > 0 &&
            newAuthor.lastName.length > 0 &&
            newAuthor.email.length > 0 &&
            newAuthor.street.length > 0 &&
            newAuthor.city.length > 0)
        {
            editAuthor({newAuthor})
            setUpdateAuthor(newAuthor)
        }
    }

    return (
        <>
        <main className="main">
            {/* FIX PROFILE IMAGE */}
            <h2>Profile</h2>
            <h2>{initials} - {author.firstName} {author.lastName}</h2>
            <main className="green">
                <div className="yellow row1">
                    <h3>Account info</h3>
                    <p>First Name*</p>
                    <input type="text" name="firstName" placeholder={author.firstName} value={newAuthor.firstName} onChange={handleInput}></input>
                    <p>Last Name*</p>
                    <input type="text" name="lastName" placeholder={author.lastName} value={newAuthor.lastName} onChange={handleInput}></input>
                    <p>Email*</p>
                    <input type="text" name="email" placeholder={author.email} value={newAuthor.email} onChange={handleInput}></input>
                    <p>Job Title</p>
                    <input type="text" name="jobTitle" placeholder={author.jobTitle} value={newAuthor.jobTitle} onChange={handleInput}></input>
                </div>
                <div className="yellow row2">
                    <h3>Address</h3>
                    <p>Street*</p>
                    <input type="text" name="street" placeholder={author.street} value={newAuthor.street} onChange={handleInput}></input>
                    <p>City*</p>
                    <input type="text" name="city" placeholder={author.city} value={newAuthor.city} onChange={handleInput}></input>
                    <p>*Required</p>
                    <button onClick={handleClick}>Save</button>
                </div>
            </main>
        </main>
        </>
    )
}