import { useContext } from 'react'
import titleHeader from '../assets/images/title-header.svg'
import { StateContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const { randomAuthor } = useContext(StateContext)

    const navigate = useNavigate()

    return (
        <header>
            {randomAuthor &&
                <>
                    <img 
                        id='title-header'
                        src={titleHeader} 
                        alt="Cohort Manager" 
                        onClick={() => navigate('/')}
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