import TextLabel from "@components/TextLabel";
import { funcProp, objectProp, sectionProp } from "@utilities/propTypeDefs";

export default function ProfileFormSection({ formData, section, setFormData }) {
  const { title, fields } = section;
  return (
    <section className="form-section">
      <h2>{title}</h2>
      <hr />
      {fields.map((field) => (
        <TextLabel
          key={`field-${field.inputName}`}
          field={field}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
    </section>
  );
}

ProfileFormSection.propTypes = {
  section: sectionProp,
  setFormData: funcProp,
  formData: objectProp,
};
