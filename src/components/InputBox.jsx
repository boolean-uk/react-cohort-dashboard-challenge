import "../styles/InputBox.css";
export default function InputBox({ placeholder, value, setContent, marginL }) {
    const handleChange = (e) => {
        setContent(e.target.value)
    }
    return (
        <input className="inputBox" type="text" value={value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ marginLeft: marginL }} />
    )
}