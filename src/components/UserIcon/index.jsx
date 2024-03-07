import "./styles.css";

export default function UserIcon({ firstName, lastName, color }) {

    return (
        <div className="circle" style={{backgroundColor: color}}>{firstName.charAt(0)}{lastName.charAt(0)}</div>
    )
}