export default function TextInput(props) {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
