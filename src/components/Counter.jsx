import React, { useState, useEffect } from "react";

function Counter() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		const counter = setInterval(
			() => setCount((prevCount) => prevCount + 1),
			1000
		);

		return () => clearInterval(counter);
	}, []);

	return (
		<div>
			Count: <span>{count}</span>
		</div>
	);
}

export default Counter;
