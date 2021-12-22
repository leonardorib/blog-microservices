import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([]);

	const fetchData = async () => {
		const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
		setComments(res.data);
	};

	const renderComments = comments.map(comment => {
		return (
			<li key={comment.id}>{comment.content}</li>
		);
	});

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<ul>
			{renderComments}
		</ul>
	);
};

export default CommentList;