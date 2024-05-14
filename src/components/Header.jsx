import titleHeader from '../assets/images/title-header.svg'

export default function Header(props) {
    const { randomAuthor } = props

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