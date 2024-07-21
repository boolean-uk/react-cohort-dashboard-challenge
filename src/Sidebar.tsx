import { useNavigate } from 'react-router-dom'
import home from '../_assets/home-icon.svg'
import profile from '../_assets/profile-icon.svg'

export default function Sidebar() {
    return (
        <aside className='navbar bg-base-200 fixed z-20 flex h-screen w-24 flex-col items-center gap-4 p-4 pt-24'>
            <SidebarButton path='/' name='home' />
            <SidebarButton path='/profile/1' name='profile' />
        </aside>
    )
}

function SidebarButton(props: { path: string; name: string }) {
    const { path, name } = props
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        navigate(path)
    }

    return (
        <button
            onClick={() => handleClick(path)}
            className='btn flex h-20 flex-row items-center justify-center p-4'
        >
            <img src={name === 'home' ? home : profile} className='h-8' />
            <span>{name[0].toUpperCase() + name.slice(1)}</span>
        </button>
    )
}
