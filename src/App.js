import { createContext, useContext, useState } from "react";
import Content from "./components/Content";
import Error from "./components/Error";
import Header from "./components/Header";
import DictionaryContext from "./context/DictionaryContext";

function App() {
	const [word, setWord] = useState("");
	const [result, setResult] = useState();
	const [isIncorrect, setIsIncorrect] = useState(false);

	return (
		<div>
			<DictionaryContext.Provider
				value={{
					word,
					setWord,
					result,
					setResult,
					isIncorrect,
					setIsIncorrect,
				}}
			>
				<Header />
				<Content />
				{isIncorrect && <Error />}
			</DictionaryContext.Provider>
		</div>
	);
}

export default App;
