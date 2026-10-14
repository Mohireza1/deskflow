import type { ReactNode } from "react";

const colorMap = {
  red: "bg-red-500/90 shadow-red-400/45",
  blue: "bg-blue-800/90 shadow-blue-400/45",
  green: "bg-emerald-500 shadow-emerald-600/45",
  orange: "bg-orange-500/90 shadow-orange-400/45",
};

type colorProp = {
  color: keyof typeof colorMap;
  text: string;
  amount: number;
  children: ReactNode;
};

const InfoCard = ({ color, children, text, amount }: colorProp) => {
  return (
    <div className={`space-y-1.5 rounded-xl p-3 shadow-md ${colorMap[color]}`}>
      <div className="bg-red mr-2 w-fit rounded-lg bg-white/40 p-1.5 text-white *:size-5">
        {children}
      </div>
      <h2 className="text-xs font-normal text-white/90">{text}</h2>
      <p className="text-2xl font-light text-white">{amount}</p>
    </div>
  );
};

export default InfoCard;
