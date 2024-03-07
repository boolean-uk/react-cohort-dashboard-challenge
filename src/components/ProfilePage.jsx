import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../utilites/apiRequests";
import { useEffect, useState } from "react";
import { ProfileIcon } from "./General/ProfileIcon";

export const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const [formData, setFormData] = useState(null);
	const [successfullSubmit, setSuccesfullSubmit] = useState(false);
	const { userId } = useParams();

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		setSuccesfullSubmit(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		putRequest(`/contact/${userId}`, formData).then((response) => {
			setUser(response);
			setSuccesfullSubmit(true);
		});
	};

	useEffect(() => {
		getRequest(`/contact/${userId}`).then((responseUser) => {
			setUser(responseUser);
			setFormData(responseUser);
		});
	}, [userId]);

	return !user ? (
		<p>Loading user...</p>
	) : (
		<main>
			<div className="card">
				<div className="border-bottom">
					<div className="user-header">
						<ProfileIcon user={user} />
						<h1>{`${user.firstName} ${user.lastName}`}</h1>
					</div>
				</div>
				<form className="profile-form">
					<div>
						<ul className="border-bottom">
							<h1>Account info</h1>
							<li>
								<label htmlFor="firstName">First name*</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									onChange={handleInput}
									value={formData.firstName}
								/>
							</li>
							<li>
								<label htmlFor="lastName">Last name*</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									onChange={handleInput}
									value={formData.lastName}
								/>
							</li>
							<li>
								<label htmlFor="email">Email*</label>
								<input
									type="text"
									id="email"
									name="email"
									onChange={handleInput}
									value={formData.email}
								/>
							</li>
						</ul>
						<ul className="border-bottom">
							<h1>Adress</h1>
							<li>
								<label htmlFor="city">City</label>
								<input
									type="text"
									id="city"
									name="city"
									onChange={handleInput}
									value={formData.city}
								/>
							</li>
							<li>
								<label htmlFor="street">Street</label>
								<input
									type="text"
									id="street"
									name="street"
									onChange={handleInput}
									value={formData.street}
								/>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<h1>Extra info</h1>
							<li>
								<label htmlFor="gender">Gender</label>
								<input
									type="text"
									id="gender"
									name="gender"
									onChange={handleInput}
									value={formData.gender}
								/>
							</li>
							<li>
								<label htmlFor="favouriteColour">Favorite color</label>
								<input
									type="text"
									id="favouriteColour"
									name="favouriteColour"
									onChange={handleInput}
									value={formData.favouriteColour}
								/>
							</li>
						</ul>
						<ul>
							<h1>Company info</h1>
							<li>
								<label htmlFor="city">Job title</label>
								<input
									type="text"
									id="jobTitle"
									name="jobTitle"
									onChange={handleInput}
									value={formData.jobTitle}
								/>
							</li>
						</ul>
					</div>
					<button
						onClick={handleSubmit}
						disabled={successfullSubmit}
						className={successfullSubmit ? "disabled" : ""}
					>
						{successfullSubmit ? "Saved !" : "Save"}
					</button>
				</form>
			</div>
		</main>
	);
};
