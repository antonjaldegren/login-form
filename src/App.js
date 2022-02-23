import { useState } from "react";
import "./App.css";
import FetchData from "./components/FetchData";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";

function App() {
	const [showCounter, setShowCounter] = useState(false);

	return (
		<div className="App">
			<FetchData />
			<span>Toggle counter: </span>
			<input
				type="checkbox"
				onChange={(e) => setShowCounter(e.target.checked)}
			/>
			{showCounter && <Counter />}
			<LoginForm />
		</div>
	);
}

export default App;
