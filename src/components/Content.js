import React, { useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";
import Definition from "./Definition";
import Example from "./Example";
import Word from "./Word";

function Content() {
	const { result, isIncorrect } = useContext(DictionaryContext);

	return (
		!isIncorrect && (
			<div className='mx-auto p-6 flex flex-col space-y-8 md:flex-row md:space-x-5 md:space-y-0 md:p-6'>
				<Word word={result?.word} />
				<Definition definitions={result?.meanings[0].definitions} />
				<Example definitions={result?.meanings[0].definitions} />
			</div>
		)
	);
}

export default Content;
