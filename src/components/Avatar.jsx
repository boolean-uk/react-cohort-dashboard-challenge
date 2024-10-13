function Avatar({ name, favouriteColour }) {


    function getInitials(name) {
        const [firstName, lastName] = name.split(' ');
    
        const firstLetter = firstName.charAt(0).toLocaleUpperCase();
        const secondLetter = lastName.charAt(0).toLocaleUpperCase();
    
        const result = firstLetter + secondLetter;
        
        return result;
     
    }
        return(  
        <div className="avatar" style={{ background: favouriteColour }}>
            <span className="avatar-name">
                {getInitials(name)}
            </span>
        </div>
        );
    
    }
    
    export default Avatar;