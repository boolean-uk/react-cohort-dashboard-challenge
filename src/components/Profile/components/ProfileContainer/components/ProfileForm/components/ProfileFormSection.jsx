import TextLabel from "@components/TextLabel";
import {
  boolProps,
  funcProp,
  objectProp,
  sectionProp,
} from "@utilities/propTypeDefs";

export default function ProfileFormSection({
  formData,
  section,
  setFormData,
  submitted,
}) {
  const { title, fields } = section;
  return (
    <section className="form-section flex flex-col gap-8">
      <hr />
      <h2 className="text-3xl font-semibold">{title}</h2>
      {/* <div className="field-container flex flex-col gap-8"> */}
        {fields.map((field) => (
          <TextLabel
            key={`field-${field.inputName}`}
            field={field}
            formData={formData}
            setFormData={setFormData}
            submitted={submitted}
          />
        ))}
      {/* </div> */}
    </section>
  );
}

ProfileFormSection.propTypes = {
  formData: objectProp,
  section: sectionProp,
  setFormData: funcProp,
  submitted: boolProps,
};
