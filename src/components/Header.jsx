import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/postSlice";

const Header = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useDispatch();
	const { createPostData } = useSelector((state) => state.posts);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost({ title, description }));
	};
	return (
		<>
			<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-7xl  flex flex-wrap items-center justify-between mx-auto">
					<a href="https://flowbite.com/" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-6 mr-3 sm:h-9"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Redux Toolkit Practice
						</span>
					</a>
					<div className="flex md:order-2">
						<button
							type="button"
							onClick={() => setModal(!modal)}
							className="text-white flex items-center justify-between bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
							New Post
						</button>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-1/2 md:order-1"
						id="navbar-sticky"
					>
						<div className="relative w-full">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
							<input
								type="text"
								id="default-search"
								className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search Posts..."
								required
							/>
							<button
								type="submit"
								className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* <!-- Main modal --> */}

			{modal && (
				<div className=" fixed top-0 left-0 h-screen flex item-center justify-center  bg-black/50  z-50  w-full p-4 overflow-x-hidden overflow-y-auto ">
					<div className="relative w-full h-full max-w-md md:h-auto">
						{/* <!-- Modal content --> */}
						{createPostData && (
							<div
								class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
								role="alert"
							>
								<svg
									aria-hidden="true"
									class="flex-shrink-0 inline w-5 h-5 mr-3"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span class="sr-only">Info</span>
								<div>
									<span class="font-medium">Success alert!</span> Change a few
									things up and try submitting again.
								</div>
							</div>
						)}
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<button
								type="button"
								onClick={() => setModal(!modal)}
								className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<div className="px-6 py-6 lg:px-8">
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									Create New Post
								</h3>
								<form onSubmit={handleSubmit} className="space-y-6" action="#">
									<div>
										<label
											htmlFor="title"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Title
										</label>
										<input
											type="text"
											name="title"
											id="title"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											placeholder="Title..."
											required
											value={title}
											onChange={(e) => {
												setTitle(e.target.value);
											}}
										/>
									</div>
									<div>
										<label
											htmlFor="description"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Description
										</label>
										<input
											type="text"
											name="description"
											id="description"
											placeholder="Description..."
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											required
											value={description}
											onChange={(e) => {
												setDescription(e.target.value);
											}}
										/>
									</div>
									<button
										type="submit"
										className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
