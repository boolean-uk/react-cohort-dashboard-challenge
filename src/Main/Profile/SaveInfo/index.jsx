import './style.css'

function SaveInfo({handleSubmit}) {
    return(
        <div className="profile-inputs-row-item save-button">
            <button onClick={handleSubmit}>Save changes</button>
        </div>
    )
}

export default SaveInfo