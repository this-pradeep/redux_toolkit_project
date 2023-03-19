import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./redux/postSlice";

const store = configureStore({
	reducer: {
		posts: postSlice,
	},
});

export default store;
