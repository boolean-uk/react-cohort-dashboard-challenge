function reduceForm(setupForm) {
  return setupForm.reduce(
    (obj, entry) => ((obj[entry.inputName] = ""), obj),
    {}
  );
}

export {reduceForm}