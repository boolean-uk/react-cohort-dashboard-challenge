import CohortManagerLogo from './CohortManagerLogo';
import Avatar from './Avatar';

const Header = () => {
  return (
    <header>
        <div className="header">
            <CohortManagerLogo />
            <Avatar name={"P J"}/>
        </div>
    </header>
  );
};

export default Header;
