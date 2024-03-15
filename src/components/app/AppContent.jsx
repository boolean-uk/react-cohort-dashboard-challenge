import PropTypes from "prop-types";

function AppContent({ children }) {
  return <div className="app-content">{children}</div>;
}

AppContent.propTypes = {
  children: PropTypes.any,
};

export default AppContent;
