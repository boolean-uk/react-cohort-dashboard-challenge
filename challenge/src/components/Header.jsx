import logo from '../assets/title_header.svg'
import '../style/dash.css'
export function Header(){
    return(
        <header className="header blue">
            <div className='iconBox'>
                <img src={logo}/>
            </div>
        </header>
    )
}