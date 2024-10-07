import { useContext } from 'react';
import { MyContext } from '../../ApiProvider';
import title from "../../assets/title-header.svg";

function Header() {
  const { contact } = useContext(MyContext);

  
  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return '';
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {contact && (
        <>
          <img src={title} alt="Cohort Manager" style={{ height: '35px' }} />

          
          <div style={styles.circle}>
            <span style={styles.initials}>
              {getInitials(contact.firstName, contact.lastName)}
            </span>
          </div>
        </>
      )}
    </header>
  );
}

const styles = {
  circle: {
    backgroundColor: '#32CD32',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '20px',
  },
  initials: {
    textAlign: 'center',
  },
};

export default Header;
