import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
	const [userId, setUserId] = useState<number>();
	const { data: posts, error, isLoading } = usePosts(userId);

	if (isLoading) return <p>Loading</p>;

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<select
				onChange={(event) => setUserId(parseInt(event.target.value))}
				value={userId}
				name=""
				id=""
				className="form-select mp-3"
			>
				<option value=""></option>
				<option value="1">User 01</option>
				<option value="2">User 02</option>
				<option value="3">User 03</option>
			</select>
			<ul className="list-group">
				{posts?.map((post) => (
					<li key={post.id} className="list-group-item">
						<span style={{ fontWeight: "bold" }}>{post.title}</span>
						<br />
						{post.body}
					</li>
				))}
			</ul>
		</>
	);
};

export default PostList;
