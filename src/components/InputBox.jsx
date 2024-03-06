import "../styles/InputBox.css";
export default function InputBox({ placeholder, value, onChange, marginL}) {
    return (
        <input className="inputBox" type="text" placeholder={placeholder} value={value} onChange={onChange} style={{marginLeft: marginL}}/>
    )
}