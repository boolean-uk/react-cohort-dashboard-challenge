import React from "react";
import { useState } from "react";

function CompanyInfo() {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    catchPhrase: '',
    statement: '',
  })

  

  return (
    <>
      <div className="account-company-info">
        <h3>Company Info</h3>
        <ul>
          <li>
            <label>
              <input
                type="text"
                id="account-name"
                name="account-name"
                placeholder="Company name"
                value=""
                onChange=""
              />
            </label>
          </li>
          <li>
            <label>
              <input
                type="text"
                id="catch-phrase"
                name="catch-phrase"
                placeholder="Catch phrase"
                value={companyInfo.companyName}
                onChange=""
              />
            </label>
          </li>
          <li>
            <label>
              <input
                type="text"
                id="account-statement"
                name="account-statement"
                placeholder="Business statement"
                value=""
                onChange=""
              />
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CompanyInfo;
