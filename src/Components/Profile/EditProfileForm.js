import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";

function EditProfileForm() {
    const { id } = useParams();
    const { users, setUsers,requiredFieldError, setRequiredFieldError, API_BASE_URL } = useContext(DataContext);

    const userData = findById(users, id);

    const initialState = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        website: userData.website,
    };

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const updateUserData = async (answerData) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify(answerData),
                }
            );

            if (response.ok) {
                const updatedUsers = users.map((user) => {
                    if (user.id === Number(id)) {
                        return { ...user, ...answerData };
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
        if (!formData.name|| !formData.email ) {
            setRequiredFieldError(true);
            return;
        } else {
            setRequiredFieldError(false);
        }
        await updateUserData(formData);
        navigate(`/view/profile/${id}`, {});
        // navigate("/");
    };
    return (
        <main className="main-section">
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit}>
                    <h2>EDIT PROFILE</h2>
                    <p class="warning">* Mandatory fields</p>
                    <div class="edit-field">
                        <h3>
                            NAME <span class="warning small">*</span>
                        </h3>
                        {requiredFieldError && (
                            <p class="error">
                               Required field
                            </p>
                        )}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div class="form__group">
                        <h3>USERNAME</h3>
                        INPUT
                    </div> */}
                    <div class="edit-field">
                        <h3>
                            EMAIL <span class="warning small">*</span>
                        </h3>
                        {requiredFieldError && (
                            <p class="error">
                               Required field
                            </p>
                        )}
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div  class="edit-field">
                        <h3>
                            PHONE NUMBER
                            
                        </h3>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div  class="edit-field">
                        <h3>WEBSITE</h3>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        class="form__submit"
                        type="submit"
                        value="Submit!"
                    />
                </form>
            </section>
        </main>
    );
}

export default EditProfileForm;
