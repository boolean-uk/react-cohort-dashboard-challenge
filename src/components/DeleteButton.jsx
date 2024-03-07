import "../styles/Buttons.css";
export default function DeleteButton({ name = "Delete", onClick, h, w }) {
    return (
        <button style={{ height: h, width: w }} className="deleteButton" onClick={() => {
            if (window.confirm("Are you sure you want to delete this?")) {
                onClick()
            }
        }}>{name}</button>
    )
}