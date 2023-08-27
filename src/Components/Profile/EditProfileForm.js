import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DataContext from "../../DataContext";

function EditProfileForm() {
    const { id } = useParams();
    const { users, setUsers } = useContext(DataContext);
    const initialState = {
        name: "",
        // username: "",
        email: "",
        phone: "",
        website: "",
    };
    const {
        state: { userData },
    } = useLocation();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const updateAnswer = (id, answerData) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(answerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then(() => {
            const updatedUsers = users.map((u) => (u.id = id ? answerData : u));
            setUsers(updatedUsers);
        });

    const handleSubmit = (event) => {
        event.preventDefault();
        updateAnswer(id, formData);
    };
    return (
        <main className="main-section">
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit} noValidate>
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

                    <input class="form__submit" type="submit" value="UPDATE" />
                </form>
            </section>
        </main>
    );
}

export default EditProfileForm;
