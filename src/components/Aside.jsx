import { useNavigate } from "react-router-dom"

function Tab({label, icon, active}) {
  const navigate = useNavigate()
  return (
    <li>
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
      icon: "_assets/home-icon-svg.md"
    },
    {
      label: "Profile",
      icon: "_assets/profile-icon-svg.md"
    }
  ]


  return (
    <>
      {tabs.map((tab, index) => <Tab key={index} label={tab.label} icon={tab.icon} activeTab={activeTab === tab.label ? true : false}/>)}
    </>
  )
}