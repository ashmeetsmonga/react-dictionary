import React, { useContext } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import DictionaryContext from "../context/DictionaryContext";

function Search() {
	const { word, setWord } = useContext(DictionaryContext);

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	return (
		<div className='relative inline-flex w-1/2 items-center mb-2 md:w-1/3 '>
			<SearchIcon className='absolute left-3 w-6 z-10 text-gray-500' />
			<input
				className='my-3 rounded-full p-2 pl-11 focus:outline-none w-full'
				type='text'
				value={word}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Search;
