import InitialIcon from "./InitialIcon"

export default function Header () {
    return (
        <header className='h-auto py-2 px-7 bg-cohortBlue flex place-items-center justify-between'>
            <img className='h-9' src={'assets/title-header-svg.svg'} />
            <InitialIcon />
        </header>
    )
}