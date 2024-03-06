//Example entry
//const entry = { labelName: "", name: "" };
function FormSection({ formSectionData, formProfileData, handleValueChange }) {
  const { title, entries } = formSectionData;

  return (
    <div id={title} className="flex-fill border-top m-2 mb-5">
      <h4 className="my-2">
        <b>{title}</b>
      </h4>
      {/* <label>
        First Name1
        <input type="text" name="firstName"></input>
      </label> */}
      {entries.map((entry, indx) => {
        return (
          <label key={entry.name + indx}>
            {entry.labelName}
            <input
              type="text"
              name={entry.name}
              value={formProfileData[entry.name]}
              onChange={handleValueChange}
            ></input>
          </label>
        );
      })}
    </div>
  );
}
export default FormSection;
