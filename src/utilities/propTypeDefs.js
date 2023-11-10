import PropTypes from "prop-types";

const postProps = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

const contactProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string,
  jobTitle: PropTypes.string,
  email: PropTypes.string,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
});

export { contactProps, postProps };
