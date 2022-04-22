import React, { useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";

function Word({ word }) {
	const { result } = useContext(DictionaryContext);
	return (
		result && (
			<div className='text-3xl font-bold mt-2 text-customBg md:w-1/4 md:text-center md:mt-0'>
				{word}
			</div>
		)
	);
}

export default Word;
