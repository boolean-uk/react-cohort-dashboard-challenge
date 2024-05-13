export default function NavAside () {
    return (
        <nav className='flex flex-col w-32 h-full'>
            <button className='p-5 grid place-items-center'><img className='h-6' src="/assets/home-icon-svg.svg"/>Home</button>
            <button className='p-5 grid place-items-center'><img className='h-6' src="/assets/profile-icon-svg.svg"/>Profile</button>
        </nav>
    )
}