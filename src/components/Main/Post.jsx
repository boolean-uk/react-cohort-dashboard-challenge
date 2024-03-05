import { Link } from "react-router-dom";
import { ProfileIcon } from "../General/ProfileIcon";
import { Comment } from "./Comment";
import { CreateComment } from "./CreateComment";

export const Post = () => {
	return (
		<div className="card post">
			<ProfileIcon />
			<h1>Sam Fletcher</h1>
			{/* Todo get id of post */}
			<Link to={"/id"}>Ea molestias quasi</Link>
			<p>Lorem ipsum dolor sit amet,</p>
			<Comment />
			<CreateComment />
		</div>
	);
};
