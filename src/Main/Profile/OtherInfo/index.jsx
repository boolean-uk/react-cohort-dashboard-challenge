function OtherInfo() {
    return(
        <div className="profile-inputs-row-item">
        <h2>Other info</h2>
        <form className="account-info-form">
            <label htmlFor="gender">Gender</label>
            <input id="gender" name="gender" type="text" placeholder="Gender" />

            <label htmlFor="job-title">Job Title</label>
            <input id="job-title" name="jobTitle" type="text" placeholder="Job Title" />

            <label htmlFor="favourite-colour">Favourite Colour</label>
            <input id="favourite-colour" name="favouriteColour" type="text" placeholder="Favourite Colour" />

        </form>
    </div>
    )
}

export default OtherInfo