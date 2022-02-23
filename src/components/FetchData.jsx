import React, { useEffect, useState } from "react";

function FetchData() {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"https://www.reddit.com/r/reactjs.json"
				);
				const data = await response.json();
				setData(data.data.children);
			} catch {
				setData([]);
			}
		}
		fetchData();
	}, []);

	const filteredData = data.filter((thread) =>
		thread.data.title.toLowerCase().includes(input.toLowerCase())
	);

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{data.length > 0 &&
				filteredData.map((thread) => (
					<p key={thread.data.id}>{thread.data.title}</p>
				))}
		</div>
	);
}

export default FetchData;
