import React from "react";
import Search from "./Search";

function Header() {
	return (
		<div className='w-screen text-center bg-customBg'>
			<h1 className='text-gray-200 font-thin text-3xl pt-6 md:text-4xl'>
				React Dictionary
			</h1>
			<h2 className='text-gray-200 font-thin text-2xl pt-3 md:text-3xl'>
				Look up a word, learn it forever
			</h2>
			<Search />
		</div>
	);
}

export default Header;
