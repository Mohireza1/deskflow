type Props = { text: string };

const Seperator = ({ text }: Props) => {
  return (
    <div className="mx-3 my-1 flex items-center gap-1">
      <p className="text-xs text-black/40">{text}</p>
      <hr className="flex-1 text-black/20" />
    </div>
  );
};

export default Seperator;
