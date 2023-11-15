export function userAddressForm(form, target) {
  const { name, value } = target;
  switch (name) {
    case "street":
      return { ...form, address: { ...form.address, street: value } };
    case "suite":
      return { ...form, address: { ...form.address, suite: value } };
    case "city":
      return { ...form, address: { ...form.address, city: value } };
    case "zipcode":
      return { ...form, address: { ...form.address, zipcode: value } };
    default:
      return { ...form, [name]: value };
  }
}

export function userCompanyForm(form, target) {
  const { name, value } = target;
  switch (name) {
    case "companyName":
      return { ...form, company: { ...form.company, companyName: value } };
    case "catchPhrase":
      return { ...form, company: { ...form.company, catchPhrase: value } };
    case "bs":
      return { ...form, company: { ...form.company, bs: value } };
    default:
      return { ...form, [name]: value };
  }
}