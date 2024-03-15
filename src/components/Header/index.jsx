import IdentityHeader from "./IdentityHeader.jsx"
import Nav from './NavHeader.jsx'

function Header(){
    return(
<>
<header className="headerMain">
<IdentityHeader/>
<Nav/>
</header>
</>
    )
}
export default Header