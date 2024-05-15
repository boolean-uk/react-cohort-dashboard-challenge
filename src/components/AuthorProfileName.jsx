import { useContext } from "react"
import { ProfileContext } from "./AuthorProfile"

export default function AuthorProfileName() {
    const { findProfile } = useContext(ProfileContext)

    return (
        <section className="name">
            <figure style={{ backgroundColor: `${findProfile.favouriteColour}` }}>
                <figcaption>
                    {findProfile.firstName[0]}{findProfile.lastName[0]}
                </figcaption>
            </figure>

            <h2>{findProfile.firstName} {findProfile.lastName}</h2>
        </section>
    )
}