import { createContext, useContext, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import DictionaryContext from "./context/DictionaryContext";

function App() {
	const [word, setWord] = useState("");
	const [definiton, setDefinition] = useState("");
	const [example, setExample] = useState("");

	return (
		<div>
			<DictionaryContext.Provider
				value={{ word, setWord, definiton, setDefinition, example, setExample }}
			>
				<Header />
				<Content />
			</DictionaryContext.Provider>
		</div>
	);
}

export default App;
