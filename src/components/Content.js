import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Word from "./Word";

function Content() {
	return (
		<div className='mx-auto p-6 flex flex-col space-y-8 md:flex-row md:space-x-5 md:space-y-0 md:p-6'>
			<Word />
			<Definition />
			<Example />
		</div>
	);
}

export default Content;
