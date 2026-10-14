import InfoCard from "./_component/InfoCard";
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5";
import TicketCard from "./_component/TicketCard";
import Seperator from "./_component/Seperator";

const Panel = () => {
  return (
    <>
      <Seperator text="Overview" />
      <div className="grid grid-cols-2 gap-2 p-2">
        <InfoCard color="blue" text="Submitted" amount={50000}>
          <IoTicketOutline />
        </InfoCard>
        <InfoCard color="green" text="Pending" amount={244}>
          <IoPersonOutline />
        </InfoCard>
        <InfoCard color="blue" text="Submitted" amount={12}>
          <IoTicketOutline />
        </InfoCard>
        <InfoCard color="green" text="Pending" amount={5810}>
          <IoPersonOutline />
        </InfoCard>
      </div>
      <Seperator text="Recent Tickets" />
      <div className="space-y-4 p-2">
        <TicketCard
          key={1}
          number="324"
          date="95/12/1"
          status="pending"
          text="Occaecat velit qui deserunt Lorem tempor laboris occaecat. Aute sit quis aliquip sit nostrud et laboris excepteur. Consectetur ut eu officia velit culpa deserunt nisi sint commodo in officia nostrud dolore."
        />
        <TicketCard
          key={2}
          number="324"
          date="95/12/1"
          status="completed"
          text="Occaecat velit qui deserunt Lorem tempor laboris occaecat. Aute sit quis aliquip sit nostrud et laboris excepteur. Consectetur ut eu officia velit culpa deserunt nisi sint commodo in officia nostrud dolore."
        />
        <TicketCard
          key={3}
          number="324"
          date="95/12/1"
          status="declined"
          text="Occaecat velit qui deserunt Lorem tempor laboris occaecat. Aute sit quis aliquip sit nostrud et laboris excepteur. Consectetur ut eu officia velit culpa deserunt nisi sint commodo in officia nostrud dolore."
        />
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Panel;
