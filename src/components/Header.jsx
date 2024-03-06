import React, { useContext } from 'react'
import TitleHeaderSvg from './Icons/TitleHeader'
import ProfilePicture from './ProfilePicture'
import { UsersContext } from '../App'

export function Header(props) {
    
    const {currentUser} = useContext(UsersContext)

    if(!currentUser) return <p>Header Loading!</p>;
    
    return (
        <>
            <header className="header">
                <div className='main-menu'>
                    <TitleHeaderSvg />
                    <ProfilePicture firstName={currentUser.firstName} 
                        lastName={currentUser.lastName} 
                        favouriteColour={currentUser.favouriteColour}/>
                </div>
            </header>
        </>
    )
}
