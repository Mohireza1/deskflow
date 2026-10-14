"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
type TicketStatus = "pending" | "completed" | "declined";

type TicketCardProps = {
  number: string;
  date: string;
  status: TicketStatus;
  text: string;
};

type StatusStyles = {
  ticket: string;
  dot: string;
};

const statusMap = {
  pending: { ticket: "text-amber-500", dot: "bg-amber-400 shadow-amber-400" },
  completed: { ticket: "text-emerald-500", dot: "bg-emerald-400 shadow-emerald-400" },
  declined: { ticket: "text-red-500", dot: "bg-red-400 shadow-amber-400" },
} satisfies Record<TicketStatus, StatusStyles>;

const TicketCard = ({ number, date, status, text }: TicketCardProps) => {
  const [isClosed, setClosed] = useState(true);

  return (
    <div className="rounded-xl bg-white p-4 shadow-lg">
      <div className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-3">
        <IoTicketOutline
          className={`row-span-2 size-8/9 rounded-xl bg-black/5 p-2 ${statusMap[status]?.ticket ?? statusMap["pending"].ticket}`}
        />
        <Link className="col-span-3" href={"#"}>
          <h3 className="cursor-pointer text-lg font-medium hover:text-blue-400 hover:underline">
            Ticket #{number}
          </h3>
        </Link>
        <p className="text-xs font-light">{date}</p>
        <p className="text-xs font-light capitalize">
          <span
            aria-hidden="true"
            className={`mr-1 inline-block h-2 w-2 rounded-full shadow-[0_0_3px_0px] ${statusMap[status]?.dot ?? statusMap["pending"].dot} `}
          />
          {status}
        </p>
      </div>
      <button
        type="button"
        className="block w-full cursor-pointer rounded text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        aria-expanded={!isClosed}
        aria-label={isClosed ? "Show full ticket description" : "Collapse ticket description"}
        onClick={() => setClosed((closed) => !closed)}
      >
        <span
          className={clsx(
            "my-2 block overflow-hidden text-justify text-sm font-light transition-[max-height] duration-150 ease-in",
            isClosed ? "max-h-25 mask-b-from-60%" : "max-h-80",
          )}
        >
          {text}
        </span>
        {isClosed ? (
          <IoIosArrowDown aria-hidden="true" className="mx-auto my-1 opacity-70" />
        ) : (
          <IoIosArrowUp aria-hidden="true" className="mx-auto my-1 opacity-70" />
        )}
      </button>
    </div>
  );
};

export default TicketCard;
