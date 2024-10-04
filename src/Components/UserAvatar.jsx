/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function UserAvatar({ user, isLink, isComment }) {
	const avatarContent = (
		<span id={isLink ? 'avatar-link' : 'avatar-initials'}>
			{user?.firstName[0]}
			{user?.lastName[0]}
		</span>
	);

	return (
		<>
			<div
				className={isComment ? 'comment-avatar' : 'author-avatar'}
				style={{ backgroundColor: user?.favouriteColour }}
			>
				{isLink ? (
					<Link to={`/view/profile/${user?.id}`} className="link">
						{avatarContent}
					</Link>
				) : (
					avatarContent
				)}
			</div>
		</>
	);
}
