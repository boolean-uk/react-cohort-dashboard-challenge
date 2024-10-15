
/* eslint react/prop-types: 0 */
function ColouredCircle({firstName, lastName, color}){
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);

    return (
        <div className="coloredCircle" style={{backgroundColor: color}}><p>{firstInitial}{lastInitial}</p></div>
    )
}

export default ColouredCircle