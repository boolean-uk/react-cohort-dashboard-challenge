export default function InputField({ type, placeholder, className }) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
    />
  )
}