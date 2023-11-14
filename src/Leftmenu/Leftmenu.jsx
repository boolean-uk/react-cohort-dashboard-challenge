import { Link } from 'react-router-dom'
import Home from '../assets/Home.svg'
import Profile from '../assets/Profile.svg'

function LeftMenuBar() {
    return(
        <>
          <div className='navigation'> 

                <ul>
                 <Link to='/home'> 
                   <li className='list'>  <img src={Home} alt="" /> <br /> Home</li>
                </Link> 

          
                 <Link to='/profile' >
                 <li className='list'>   <img src={Profile} alt="" /> <br /> Profile</li>
                 </Link>
                 
            
                
                </ul>

 
        </div>
        </>
    )
}

export default LeftMenuBar