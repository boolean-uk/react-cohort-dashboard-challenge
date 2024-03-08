import "./DashboardImage.css"
import titleHeader from "@/assets/title-header.svg"
import { useNavigate } from "react-router-dom"

const DashboardImage = () => {
    const navigate = useNavigate()
    return (
        <div className="dashboardImage">
            <img 
                onClick={() => navigate("/")}
                alt="Company logo" 
                src={titleHeader}
            />
        </div>
    )
}

export default DashboardImage