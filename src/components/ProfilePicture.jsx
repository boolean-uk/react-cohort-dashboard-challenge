/* eslint-disable react/prop-types */
export default function ProfilePicture({firstName, lastName, favouriteColour}){
    const generateInitials = () => {
        const firstInitial = firstName ? firstName[0] : '';
        const lastInitial = lastName ? lastName[0] : '';
        return `${firstInitial}${lastInitial}`.toUpperCase();
    };

    const circleStyle = {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: favouriteColour || '#000046',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#111111',
        fontSize: '18px',
        fontWeight: 'bold',
        marginRight: '1em'
    };

    return (
        <div className="circle" style={circleStyle} >
            {generateInitials()}
        </div>
    )
}