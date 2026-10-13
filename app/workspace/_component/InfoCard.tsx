import type { ReactNode } from "react";

const colorMap = {
  red: "bg-red-500/90 shadow-red-400/80",
  blue: "bg-blue-500/90 shadow-blue-400/80",
  green: "bg-green-500/90 shadow-green-400/80",
  orange: "bg-orange-500/90 shadow-orange-400/80",
};

type colorProp = {
  color: keyof typeof colorMap;
  text: string;
  children: ReactNode;
};

const InfoCard = ({ color, children, text }: colorProp) => {
  return (
    <div className={`shadow-md p-3 rounded-xl space-y-1.5 ${colorMap[color]}`}>
      <div className="size-[clamp(20px,10vw,50px)] mr-2 bg-white/40 text-white p-1 rounded-lg">
        {children}
      </div>
      <h2 className="text-white/90 font-normal text-xs">{text}</h2>
      <p className="text-2xl font-light text-white">50,000</p>
    </div>
  );
};

export default InfoCard;
