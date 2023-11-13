import { Link } from "react-router-dom"

export default function Aside() {
    return(
        <>
            <aside>
                <div>
                    <Link 
                        to="/">
                        <div className="svg-wrapper">
                            <img src="../../assets/home-icon-svg.svg"></img>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/profile/1">
                        <div className="svg-wrapper">
                            <img src="../../assets/profile-icon-svg.svg"></img>
                        </div>
                    </Link>
                </div>
            </aside>
        </>
    )
}