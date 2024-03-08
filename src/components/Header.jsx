import TitleHeader from '../assets/title-header.svg';

import '../App.css';


function Header() {


    return (
        <header>
            <img src={TitleHeader} alt="Title Header" className="title-header" />
        </header>
    )


}

export default Header