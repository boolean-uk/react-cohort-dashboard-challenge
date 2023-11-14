import { Link } from "react-router-dom"
function Header() {
    return(
        <>
            <header> 
            <div className='leftheader'> </div>

            <div  className='mainheader'> 

            
                <div className='logoheader'> 
                {/* <img className='imagelogo' src={Logo} alt="" /> */}
                Cohourt Manager
                </div>

                <Link to='/profile'>
                    <div className='profile-circle'> US</div>
                </Link>
              
            
            
            </div>
            <div  className='rightheader'>  </div>
            </header>
        </>
    )
}

export default Header