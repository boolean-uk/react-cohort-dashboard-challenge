import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import UserAvatar from './UserAvatar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewProfile.css';
import '../styles/App.css';

export default function ViewProfile() {
	const [profile, setProfile] = useState(null);
	const [profileForm, setProfileForm] = useState({});
	const { id } = useParams();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setProfileForm({ ...profileForm, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const updatedProfile = { ...profileForm };

		fetch(
			`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${profile.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedProfile),
			}
		)
			.then((response) => response.json())
			.then(() => {
				alert('Profile updated successfully.');
				setProfile(updatedProfile);
			})
			.catch((error) => {
				console.error('Error updating profile:', error);
			});
	};

	useEffect(() => {
		const fetchProfile = async () => {
			const response = await fetch(
				`https://boolean-uk-api-server.fly.dev/johnfa1508/contact/${id}`
			);
			const jsonData = await response.json();

			setProfile(jsonData);
		};

		fetchProfile();
	}, [id]);

	useEffect(() => {
		setProfileForm({
			id: profile?.id,
			firstName: profile?.firstName,
			lastName: profile?.lastName,
			gender: profile?.gender,
			email: profile?.email,
			jobTitle: profile?.jobTitle,
			street: profile?.street,
			city: profile?.city,
			latitude: profile?.latitude,
			longitude: profile?.longitude,
			favouriteColour: profile?.favouriteColour,
			profileImage: profile?.profileImage,
		});
	}, [profile]);

	if (!profile)
		return (
			<>
				<div>
					<p className="loading" style={{ color: 'white' }}>
						Loading...
					</p>
				</div>
			</>
		);

	return (
		<>
			<div className="main-content">
				<Header />
				<div className="content">
					<Navbar />

					<main>
						<article className="profile-card">
							<form className="form" onSubmit={handleSubmit}>
								<div className="form-section">
									<div className="author-info">
										<UserAvatar
											user={profile}
											isLink={false}
											isComment={false}
										/>

										<h2>
											{profile.firstName} {profile.lastName}
										</h2>
									</div>
								</div>

								<div className="form-section">
									<h3>Account Info</h3>
									<label className="profile-label">
										First Name*
										<input
											type="text"
											name="firstName"
											onChange={handleChange}
											value={profileForm.firstName}
											required
										/>
									</label>

									<label className="profile-label">
										Last Name*
										<input
											type="text"
											name="lastName"
											onChange={handleChange}
											value={profileForm.lastName}
											required
										/>
									</label>

									<label className="profile-label">
										Email*
										<input
											type="email"
											name="email"
											onChange={handleChange}
											value={profileForm.email}
											required
										/>
									</label>
								</div>

								<div className="form-section">
									<h3>Address</h3>
									<label className="profile-label">
										Street
										<input
											type="text"
											name="street"
											onChange={handleChange}
											value={profileForm.street}
										/>
									</label>

									<label className="profile-label">
										City
										<input
											type="text"
											name="city"
											onChange={handleChange}
											value={profileForm.city}
										/>
									</label>
								</div>

								<div className="form-section">
									<h3>Job info</h3>
									<label className="profile-label">
										Job title
										<input
											type="text"
											name="jobTitle"
											onChange={handleChange}
											value={profileForm.jobTitle}
										/>
									</label>
								</div>

								<input className="form__submit" type="submit" value="Save" />
							</form>
						</article>
					</main>
				</div>
			</div>
		</>
	);
}
