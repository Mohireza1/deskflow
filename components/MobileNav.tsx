"use client";

import { useState } from "react";
import {
	IoAddCircleOutline,
	IoAddCircleSharp,
	IoHomeOutline,
	IoHomeSharp,
	IoLogOutOutline,
	IoLogOutSharp,
	IoTicketOutline,
	IoTicketSharp,
} from "react-icons/io5";

const MobileNav = () => {
	const [selected, setSelected] = useState(0);

	return (
		<nav className="flex justify-between fixed bottom-3 w-5/6 max-w-80 left-0 right-0 mx-auto shadow-md bg-gray-100/30 px-4 py-1.5 rounded-2xl">
			<button type="button" onClick={() => setSelected(0)}>
				{selected === 0 ? <IoHomeSharp size={24} /> : <IoHomeOutline size={24} />}
			</button>
			<button type="button" onClick={() => setSelected(1)}>
				{selected === 1 ? <IoAddCircleSharp size={24} /> : <IoAddCircleOutline size={24} />}
			</button>
			<button type="button" onClick={() => setSelected(2)}>
				{selected === 2 ? <IoTicketSharp size={24} /> : <IoTicketOutline size={24} />}
			</button>
			<button type="button" onClick={() => setSelected(3)}>
				{selected === 3 ? <IoLogOutSharp size={24} /> : <IoLogOutOutline size={24} />}
			</button>
		</nav>
	);
};

export default MobileNav;
