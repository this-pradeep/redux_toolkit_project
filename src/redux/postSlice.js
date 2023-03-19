import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
	const res = await fetch("https://dummyjson.com/posts").then((res) =>
		res.json()
	);
	return res;
});

export const createPost = createAsyncThunk(
	"posts/createPost",
	async ({ title, description }) => {
		const res = await fetch("/posts/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				description: description,
				userId: 5,
			}),
		}).then((res) => res.json());
		return res;
	}
);

const initialState = {
	loading: false,
	data: [],
	createPostData: null,
	error: "",
};
const postSlice = createSlice({
	name: "postSlice",
	initialState,
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(getAllPosts.pending, (state, action) => {
			// Add user to the state array
			state.loading = true;
			state.data = [];
			state.error = "";
		});
		builder.addCase(getAllPosts.fulfilled, (state, action) => {
			// Add user to the state array
			// console.log(action.payload);

			state.loading = false;
			state.data = [...action.payload.posts];
			state.error = "";
		});
		builder.addCase(getAllPosts.rejected, (state, action) => {
			// Add user to the state array
			state.loading = false;
			state.data = [...action.payload.posts];
			state.error = "Something went wrong.";
		});

		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(createPost.pending, (state, action) => {
			// Add user to the state array
			// console.log("Hello", action.payload);
			state.loading = true;
			state.error = "";
		});
		builder.addCase(createPost.fulfilled, (state, action) => {
			// Add user to the state array
			// return;
			state.loading = false;
			state.createPostData = { ...action.payload };
			state.error = "";
		});
		// builder.addCase(createPost.rejected, (state, action) => {
		// 	// Add user to the state array
		// 	state.loading = false;
		// 	state.data = [...action.payload.posts];
		// 	state.error = "Something went wrong.";
		// });
	},
});

export default postSlice.reducer;
