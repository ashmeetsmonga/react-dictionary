import React, { useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";

function Definition({ definitions }) {
	return (
		<div className='space-y-4 md:w-1/3'>
			<div className='font-bold text-xl'>Definitions</div>
			{definitions?.map((obj, ind) => (
				<div key={ind}>{obj.definition}</div>
			))}
		</div>
	);
}

export default Definition;
