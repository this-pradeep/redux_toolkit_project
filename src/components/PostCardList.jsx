import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/postSlice";
import Loading from "./Loading";
import PostCard from "./PostCard";

const PostCardList = () => {
	const { data, error, loading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPosts());
		console.log(data, loading, error);
	}, []);
	return (
		<div className="mt-5 grid gap-5 md:grid-cols-3 max-w-7xl mx-auto">
			{loading && [1, 2, 3].map((el) => <Loading key={el} />)}
			{data.map((post) => {
				return <PostCard key={post?.id} {...post} />;
			})}
		</div>
	);
};

export default PostCardList;
