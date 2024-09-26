import ProfileImageWrapper from './../ProfileImageWrapper'
import { appCtx } from '../../App'
import { useContext } from 'react'

export default function NavHeader(){
    const ctx = useContext(appCtx)
    return(
        <><div id="NavHeader">
        {ctx.user!==undefined? <ProfileImageWrapper  firstName={ctx.user.firstName} lastName={ctx.user.lastName} favouriteColour={ctx.user.favouriteColour}/>:<div></div>}</div></>
    )
}