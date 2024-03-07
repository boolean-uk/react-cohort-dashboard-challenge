import "../styles/Buttons.css"
export default function EditButton({ name, onClick, w, h }) {
    return (
        <button className="editButton" onClick={onClick} style={{width: w, height: h}}>{name}</button>
    )
}