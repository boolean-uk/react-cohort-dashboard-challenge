import { useParams } from "react-router-dom" //access to URL parameters
import FeaturesMain from '../Main/FeaturesMain/FeatureMain'

//define and export functional comp using the URL parameters then return to render featuresmMain with props
export default function Post() {
    const urlParams = useParams()
    return (
        <FeaturesMain cardtype={"Post"} id={urlParams.id}/>
    )
}
