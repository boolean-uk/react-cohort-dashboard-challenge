import titleHeader from '../assets/images/title-header.svg'

export default function Header() {
    return (
        <header>
            <img 
                id='title-header'
                src={titleHeader} 
                alt="Cohort Manager" 
            />

            <figure>
                <figcaption>LS</figcaption>
            </figure>
        </header>
    )
}