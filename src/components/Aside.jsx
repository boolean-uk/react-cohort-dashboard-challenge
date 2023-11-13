import { useNavigate } from "react-router-dom"

function Tab({label, icon, path, classSelectors}) {
  const navigate = useNavigate()
  
  return (
    <li onClick={() => navigate(path)} className={classSelectors}>
      <img 
      src={icon}
      />
      {label}
    </li>
  )
}

export default function Aside({activeTab}) {

  const tabs = [
    {
      label: "Home",
      path: "/",
      icon: "../_assets/home-icon.svg"
    },
    {
      label: "Profile",
      path: "/profile",
      icon: "../_assets/profile-icon.svg"
    }
  ]

  return (
    <>
      {tabs.map((tab, index) => <Tab key={index} label={tab.label} path={tab.path} icon={tab.icon} classSelectors={activeTab === tab.label ? "navigation active" : "navigation"}/>)}
    </>
  )
}