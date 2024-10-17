import '../styles/avatar.css'


export default function Avatar({color, firstName, lastName}) {

    if (!firstName || ! lastName) return <>No avatar</>
    
    // const context = useContext(AppContext);
    // const user = context.contacts.find((c) => c.id === 1)
    

    const transformName = (first, last) => {
        const firstinitial = first.charAt(0).toLocaleUpperCase();
        const secondinitial = last.charAt(0).toLocaleUpperCase();

        return firstinitial + secondinitial;

    }
    

    return (
        <div className="avatar-container" style={{ backgroundColor: color }}>
            <p className='initials'>{transformName(firstName, lastName)}</p>
        </div>
    )

}