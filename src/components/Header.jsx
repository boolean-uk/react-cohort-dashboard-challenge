import { useContext } from 'react'
import titleHeader from '../assets/images/title-header.svg'
import { StateContext } from '../App'

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

                    <figure style={{ backgroundColor: `${randomAuthor.favouriteColour}` }}>
                        <figcaption>
                            {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                        </figcaption>
                    </figure>
                </>
            }
        </header>
    )
}