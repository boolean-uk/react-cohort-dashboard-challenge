import PropTypes from "prop-types";

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

const commentProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
});

const numberProp = PropTypes.number;

const postProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

const stringProp = PropTypes.string;

export { contactProps, commentProps, numberProp, postProps, stringProp };
