import FormSection from "./components/FormSection";

const formSections = [
  {
    title: "Account info",
    inputFields: [
        {name: "First Name",
        required: true},
        {name: "Last Name",
        required: true},
        {name: "User Name",
        required: true},
        {name: "Email",
        required: true}
    ],
  },
  {
    title: "Address",
    inputFields:  [
        {name: "Street",
        required: false},
        {name: "Street Number",
        required: false},
        {name: "City",
        required: false},
        {name: "Zip code",
        required: false}
    ],
  },
  {
    title: "Contact info",
     inputFields: [
        {name: "Phone",
        required: true},
        {name: "Website",
        required: false},
        {name: "User Name",
        required: false},
        {name: "Email",
        required: false}
    ],
  },
  {
    title: "Company info",
    inputFields: [
        {name: "Name",
        required: false},
        {name: "Catch Phrase",
        required: false},
        {name: "Business Statement",
        required: false}
    ],
  },
];

export default function ProfilePageForm() {
  return (
    <>
      <form className="profile-form">{
        formSections.map((section, index) => (
            <FormSection key={index} section ={section}/>
        ))
      }
      </form>
      <button>Submit</button>
    </>
  );
}
