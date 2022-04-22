import React, { useContext } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import DictionaryContext from "../context/DictionaryContext";
const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function Search() {
	const { word, setWord, setResult, isIncorrect, setIsIncorrect } =
		useContext(DictionaryContext);

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	const handleClick = () => {
		fetch(`${URL}${word}`)
			.then((res) => {
				if (!res.ok) throw new Error("Incorrect Word");
				return res.json();
			})
			.then((data) => {
				console.log(data[0]);
				setResult(data[0]);
				setIsIncorrect(false);
			})
			.catch((err) => {
				console.log("error");
				setIsIncorrect(true);
			});
	};

	return (
		<div className='relative inline-flex w-1/2 items-center mb-2 md:w-1/3 '>
			<SearchIcon
				onClick={handleClick}
				className='absolute cursor-pointer right-3 w-6 z-10 text-gray-500'
			/>
			<input
				className='my-3 rounded-full p-2 pl-5 pr-11 focus:outline-none w-full'
				type='text'
				value={word}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Search;
