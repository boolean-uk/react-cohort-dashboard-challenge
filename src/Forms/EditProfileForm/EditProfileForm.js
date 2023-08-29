import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";
import RequiredProfileFieldWarning from "./RequiredProfileFieldWarning";

function EditProfileForm() {
    const { id } = useParams();
    const { users, setUsers, API_BASE_URL } = useContext(DataContext);
    const userData = findById(users, id);
    const navigate = useNavigate();
    const nameArray = userData.name.split(" ");

    const initialState = {
        firstName: nameArray.slice(0, -1).join(" "),
        lastName: nameArray[nameArray.length - 1],
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        website: userData.website,
        address: {
            ...userData.address,
        },
        company: {
            ...userData.company,
        },
    };

    const [formData, setFormData] = useState(initialState);
    const [requiredProfileFieldError, setRequiredProfileFieldError] =
        useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes(".")) {
            const [objectName, attributeName] = name.split(".");
            setFormData((prevFormData) => ({
                ...prevFormData,
                [objectName]: {
                    ...prevFormData[objectName],
                    [attributeName]: value,
                },
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
                name: `${prevFormData.firstName} ${prevFormData.lastName}`,
            }));
        }
    };

    const updateUserData = async (userData) => {
        const updatedUserData = {
            ...userData,
            name: `${userData.firstName} ${userData.lastName}`,
        };
        try {
            const response = await fetch(`${API_BASE_URL}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(updatedUserData),
            });

            if (response.ok) {
                const updatedUsers = users.map((user) => {
                    if (user.id === Number(id)) {
                        return { ...user, ...updatedUserData };
                    }
                    return user;
                });
                setUsers(updatedUsers);
            } else {
                console.error("Failed to update user data");
            }
        } catch (error) {
            console.error("An error occurred while updating user data:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.username ||
            !formData.phone
        ) {
            setRequiredProfileFieldError(true);
            return;
        } else {
            setRequiredProfileFieldError(false);
        }
        await updateUserData(formData);
        navigate(`/view/profile/${id}`, {});
    };

    return (
        <main className="main-section">
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit}>
                    <h2>UPDATE PROFILE</h2>
                    <p class="warning">* Mandatory fields</p>
                    <br />
                    <div class="edit-field">
                        <h3>
                            NAME <span class="warning small">*</span>
                        </h3>
                        <RequiredProfileFieldWarning
                            requiredProfileFieldError={
                                requiredProfileFieldError
                            }
                        />
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <RequiredProfileFieldWarning
                            requiredProfileFieldError={
                                requiredProfileFieldError
                            }
                        />
                        <label htmlFor="lastName">Last name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>
                            USERNAME <span class="warning small">*</span>
                        </h3>
                        <RequiredProfileFieldWarning
                            requiredProfileFieldError={
                                requiredProfileFieldError
                            }
                        />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>
                            EMAIL <span class="warning small">*</span>
                        </h3>
                        <RequiredProfileFieldWarning
                            requiredProfileFieldError={
                                requiredProfileFieldError
                            }
                        />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>ADDRESS</h3>
                        <label htmlFor="address.street">Street:</label>
                        <input
                            type="text"
                            name="address.street"
                            value={formData.address.street}
                            onChange={handleChange}
                        />

                        <label htmlFor="address.suite">Suite:</label>
                        <input
                            type="text"
                            name="address.suite"
                            value={formData.address.suite}
                            onChange={handleChange}
                        />

                        <label htmlFor="address.city">City:</label>
                        <input
                            type="text"
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleChange}
                        />

                        <label htmlFor="address.zipcode">Zipcode:</label>
                        <input
                            type="text"
                            name="address.zipcode"
                            value={formData.address.zipcode}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>
                            PHONE NUMBER <span class="warning small">*</span>
                        </h3>
                        <RequiredProfileFieldWarning
                            requiredProfileFieldError={
                                requiredProfileFieldError
                            }
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>WEBSITE</h3>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="edit-field">
                        <h3>COMPANY</h3>

                        <label htmlFor="company.name">Company Name:</label>
                        <input
                            type="text"
                            name="company.name"
                            value={formData.company.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="company.catchPhrase">
                            Company Catchphrase:
                        </label>
                        <input
                            type="text"
                            name="company.catchPhrase"
                            value={formData.company.catchPhrase}
                            onChange={handleChange}
                        />

                        <label htmlFor="company.bs">
                            Company Business Statement:
                        </label>
                        <input
                            type="text"
                            name="company.bs"
                            value={formData.company.bs}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        class="form__submit"
                        type="submit"
                        value="SAVE CHANGES"
                    />
                </form>
            </section>
        </main>
    );
}

export default EditProfileForm;
