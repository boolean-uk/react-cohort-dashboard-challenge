import { useParams } from "react-router-dom";
import Card from "../Main/Card";

export default function FullPost() {
    const urlParams = useParams()
    
    return(
        <Card cardType={"Post"} id={urlParams.id}/>
    )
}