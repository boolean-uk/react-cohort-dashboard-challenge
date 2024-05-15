import { useContext } from 'react'
import titleHeader from '../assets/images/title-header.svg'
import { StateContext } from '../App'
import { Link } from 'react-router-dom'

export default function Header() {
    const { randomAuthor } = useContext(StateContext)

    return (
        <header>
            {randomAuthor &&
                <>
                    <img 
                        id='title-header'
                        src={titleHeader} 
                        alt="Cohort Manager" 
                    />

                    <Link to={`/contact/${randomAuthor.id}`}>
                        <figure style={{ backgroundColor: `${randomAuthor.favouriteColour}` }}>
                            <figcaption>
                                {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                            </figcaption>
                        </figure>
                    </Link>
                </>
            }
        </header>
    )
}