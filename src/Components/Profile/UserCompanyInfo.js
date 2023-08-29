function UserCompanyInfo(props) {
    const { userData } = props;
    return (
        <div className="user-company-info">
            <h2>Company Info</h2>
            <div className="detail">
                <span>Name:</span> {userData.company.name}
            </div>
            <div className="detail">
                <span>Catch Phrase:</span>
                {userData.company.catchPhrase}
            </div>
            <div className="detail">
                <span>Business Statement:</span>
                {userData.company.bs}
            </div>
        </div>
    );
}

export default UserCompanyInfo;
