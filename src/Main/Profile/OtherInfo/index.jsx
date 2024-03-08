function OtherInfo({formInput, handleChange}) {
    return(
        <div className="profile-inputs-row-item">
            <h2>Other info</h2>
            <div className="account-info-form">
                <label htmlFor="gender">Gender</label>
                <input id="gender" name="gender" type="text" placeholder="Gender" value={formInput.gender} onChange={handleChange}/>
                <label htmlFor="job-title">Job Title</label>
                <input id="job-title" name="jobTitle" type="text" placeholder="Job Title" value={formInput.jobTitle} onChange={handleChange}/>
                <label htmlFor="favourite-colour">Favourite Colour</label>
                <input id="favourite-colour" name="favouriteColour" type="text" placeholder="Favourite Colour" value={formInput.favouriteColour} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default OtherInfo