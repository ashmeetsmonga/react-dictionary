import React from "react";

function Example({ definitions }) {
	return (
		<div className='space-y-4 md:w-1/3'>
			<div className='font-bold text-xl'>Examples</div>
			{definitions?.map((obj, ind) => (
				<div key={ind}>{obj?.example}</div>
			))}
		</div>
	);
}

export default Example;
