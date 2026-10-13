import logo from "@/public/logo-full.svg";
import Image from "next/image";

const MobileHead = () => {
  return (
    <>
      <header className="shadow-md max-h-20 mb-2">
        <Image src={logo as string} alt="DeskFlow Logo" className="max-w-60 w-1/2 mx-auto" />
      </header>
    </>
  );
};

export default MobileHead;
