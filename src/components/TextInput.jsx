export default function TextInput(props) {
  return (
    <>
      <input
        className={props.className}
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
