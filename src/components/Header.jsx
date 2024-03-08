import { useContext } from "react"
import TitleHeaderSVG from "../assets/TitleHeaderSVG"
import Certificate from "./profile/Certificate"
import { InstanceContext } from "../App"

export default function Header() {
    const _instance = useContext(InstanceContext)

    return (
        <div className='header'>
            <div style={{position: "relative", top: 10}}>
                <TitleHeaderSVG scale={0.8} />
            </div>
            <div style={{float: "right", position: "relative", right: 32, top: -46}}>
                <Certificate scale={0.4} userID={_instance.userID} forceCompact />
            </div>
        </div>
    )
}
