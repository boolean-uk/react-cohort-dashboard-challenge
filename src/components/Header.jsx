import { useContext } from 'react'
import TitleHeaderSvg from './Icons/TitleHeader'
import ProfilePicture from './ProfilePicture'
import { UsersContext } from '../App'
import "./styles/Header.css"
import { Link } from 'react-router-dom'

export function Header() {
    
    const {currentUser} = useContext(UsersContext)

    if(!currentUser) return <p>Header Loading!</p>;
    
    return (
        <header className="header">
            <div className='main-menu'>
                <TitleHeaderSvg />
                <Link to={`/profile/${currentUser.id}`}> 
                    <ProfilePicture firstName={currentUser.firstName} 
                        lastName={currentUser.lastName} 
                        favouriteColour={currentUser.favouriteColour}/>
                </Link>
            </div>
        </header>
    )
}
