import styled from "styled-components";
import PropTypes from "prop-types";

const Field = styled.div`
  margin-bottom: 20px;
`;

const FieldLabel = styled.label`
  font-size: 1rem;
  color: #47477a;
  margin-bottom: 5px;
  display: block;
`;

const FieldInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #e6ebf5;
  color: #000046;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormField = ({ label, type, name, value, onChange }) => (
  <Field>
    <FieldLabel>{label}</FieldLabel>
    <FieldInput type={type} name={name} value={value} onChange={onChange} />
  </Field>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
