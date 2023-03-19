import React from "react";

const Loading = () => {
	return (
		<div
			role="status"
			className="max-w-sm p-10 border rounded-lg animate-pulse"
		>
			<div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 w-48 mb-4"></div>
			<div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
			<div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 mb-2.5"></div>
			<div className="h-3 mt-5  rounded-lg flex space-x-2  max-w-[330px] mb-2.5">
				<div className="h-4 rounded-sm w-10 bg-gray-200"></div>
				<div className="h-4 rounded-sm w-10 bg-gray-200"></div>
				<div className="h-4 rounded-sm w-10 bg-gray-200"></div>
			</div>
			<div className="mt-5">
				<div className="h-8 w-20 rounded-md bg-gray-200"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Loading;
