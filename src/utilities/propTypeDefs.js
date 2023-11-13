import PropTypes from "prop-types";

const boolProps = PropTypes.bool;

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

const funcProp = PropTypes.func;

const numberProp = PropTypes.number;

const objectProp = PropTypes.object;

const postProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  contactId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

//TODO: expand once we look at fields
const sectionProp = PropTypes.shape({
  fields: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
});

const stringProp = PropTypes.string;

export {
  boolProps,
  contactProps,
  commentProps,
  funcProp,
  numberProp,
  objectProp,
  postProps,
  sectionProp,
  stringProp,
};
