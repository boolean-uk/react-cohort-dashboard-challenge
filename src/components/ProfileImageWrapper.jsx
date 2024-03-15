export default function ProfileImageWrapper({firstName, lastName, favouriteColour}){
   
    const UserfavouriteColour =  favouriteColour !== undefined? favouriteColour:'#64648c';
    let first = firstName !== undefined?firstName[0]:"U" ;
    let last = lastName !== undefined? lastName[0]:'U';
    
    return(
        <><div className="wrapper "><span className="logo circle" style={{backgroundColor:UserfavouriteColour, textDecoration:'none'}}>{first+last}</span></div></>
    )
}

