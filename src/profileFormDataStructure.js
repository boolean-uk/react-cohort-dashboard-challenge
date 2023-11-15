 const formSections = [
    {
      title: "Account info",
      inputFields: [
          {label: "First Name",
          name: "firstName",
          required: true},
          {label: "Last Name",
          name: "lastName",
          required: true},
          {label: "User Name",
          name: "userName",
          required: true},
          {label: "Email",
          name: "email",
          required: true}
      ],
    },
    {
      title: "Address",
      inputFields:  [
          {label: "Street",
          name: "street",
          required: false},
          {label: "Street Number",
          name: "streetNumber",
          required: false},
          {label: "City",
          name: "city",
          required: false},
          {label: "Zip Code",
          name: "zipCode",
          required: false}
      ],
    },
    {
      title: "Contact info",
       inputFields: [
          {label: "Phone",
          name: "phone",
          required: true},
          {label: "Website",
          name: "website",
          required: false},
          {label: "User Name",
          name: "userName",
          required: false},
          {label: "Email",
          name: "email",
          required: false}
      ],
    },
    {
      title: "Company info",
      inputFields: [
          {label: "Name",
          name: "companyName",
          required: false},
          {label: "Catch Phrase",
          name: "catchPhrase",
          required: false}, 
          {label: "Job Title", 
            name: "jobTitle", 
            required: false},
          {label: "Business Statement",
          name: "businessStatement",
          required: false}
      ],
    },
  ]

  export default formSections