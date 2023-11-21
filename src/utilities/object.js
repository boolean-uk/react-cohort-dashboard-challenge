function checkFormValidity(formData, formSetup) {
  return formSetup.every((entry) => {
    const { inputName, required } = entry;
    if (formData[inputName].length > 0 || !required) return true;
  });
}

function reduceForm(setupForm) {
  return setupForm.reduce(
    (obj, entry) => ((obj[entry.inputName] = ""), obj),
    {},
  );
}

export { checkFormValidity, reduceForm };
