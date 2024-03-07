import titleHeader from '../assets/title-header.svg'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const goToMain = () => {
        //navigera till dashboard
        navigate('/');
    }

    return (
        <header className="header blue">
            <img
                src={titleHeader}
                alt="title header"
                onClick={goToMain} />
        </header>
    )
}

export default Header