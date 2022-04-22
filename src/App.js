import { createContext, useContext, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import DictionaryContext from "./context/DictionaryContext";

function App() {
	const [word, setWord] = useState("");
	const [result, setResult] = useState();

	return (
		<div>
			<DictionaryContext.Provider
				value={{
					word,
					setWord,
					result,
					setResult,
				}}
			>
				<Header />
				<Content />
			</DictionaryContext.Provider>
		</div>
	);
}

export default App;
