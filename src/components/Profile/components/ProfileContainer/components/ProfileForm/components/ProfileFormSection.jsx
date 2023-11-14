import TextLabel from "@components/TextLabel";
import { boolProps, funcProp, objectProp, sectionProp } from "@utilities/propTypeDefs";

export default function ProfileFormSection({ formData, section, setFormData, submitted }) {
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
          submitted={submitted}
        />
      ))}
    </section>
  );
}

ProfileFormSection.propTypes = {
  formData: objectProp,
  section: sectionProp,
  setFormData: funcProp,
  submitted: boolProps,
};
