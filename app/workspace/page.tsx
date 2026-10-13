import InfoCard from "./_component/InfoCard";
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5";

const Panel = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-2 gap-2">
        <InfoCard color="blue" text="Submitted">
          <IoTicketOutline />
        </InfoCard>
        <InfoCard color="green" text="Pending">
          <IoPersonOutline />
        </InfoCard>
        {/* <InfoCard color="blue" text="Submitted">
          <IoTicketOutline />
        </InfoCard>
        <InfoCard color="green" text="Pending">
          <IoPersonOutline />
        </InfoCard> */}
      </div>
    </>
  );
};

export default Panel;
