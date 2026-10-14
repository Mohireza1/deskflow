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
    <nav className="fixed right-0 bottom-3 left-0 z-100 mx-auto flex w-5/6 max-w-80 justify-between rounded-2xl bg-gray-100/50 px-4 py-1.5 shadow-md backdrop-blur-md">
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
