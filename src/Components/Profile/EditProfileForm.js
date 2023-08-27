import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";

function EditProfileForm() {
    const { id } = useParams();
    const { users, setUsers } = useContext(DataContext);

    // const {
    //     state: { userData },
    // } = useLocation();
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
                `https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify(answerData),
                }
            );

            if (response.ok) {
                console.log("response: ", response);
                const updatedUsers = users.map((user) => {
                    if (user.id === Number(id)) {
                        return { ...user, ...answerData };
                    }
                    return user;
                });
                console.log("updated users: ", updatedUsers);
                setUsers(updatedUsers);
                console.log("users", users);
            } else {
                console.error("Failed to update user data");
            }
        } catch (error) {
            console.error("An error occurred while updating user data:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateUserData(formData);
        console.log("FORMDATA: ", formData);
        console.log("USERS: ", users);
        navigate(`/view/profile/${id}`, {
            // state: { userData: formData },
        });
        // navigate("/");
    };
    return (
        <main className="main-section">
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit}>
                    <h2>EDIT PROFILE</h2>
                    <p class="warning">* Mandatory fields</p>
                    <div class="form__group">
                        <h3>
                            NAME <span class="warning small">*</span>
                        </h3>
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
                    <div class="form__group radio">
                        <h3>
                            EMAIL <span class="warning small">*</span>
                        </h3>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form__group radio">
                        <h3>
                            PHONE NUMBER
                            <span class="warning small">*</span>
                        </h3>
                        {/* {colorRatingError && (
                            <p class="error">
                                Please provide a rating for color.
                            </p>
                        )} */}
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form__group radio">
                        <h3>WEBSITE</h3>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <Link
                        to={`/view/profile/${id}`}
                        // to={"/"}
                        state={{ userData: formData }}
                    > */}
                    <input
                        class="form__submit"
                        type="submit"
                        value="Submit !"
                    />
                    {/* </Link> */}
                </form>
            </section>
        </main>
    );
}

export default EditProfileForm;
