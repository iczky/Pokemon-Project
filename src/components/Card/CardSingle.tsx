interface CardSingleProps {
  name: string;
  types: string;
  id: number;
  artworkFront: string;
}

const CardSingle: React.FC<CardSingleProps> = ({
  name,
  types,
  id,
  artworkFront,
}) => {
  return (
    <div className="pt-3 pb-2 px-3 flex flex-col gap-2 rounded-lg bg-base-card hover:scale-105 transition cursor-pointer group">
      <div className="flex justify-between font-bold text-base font-lato">
        <p className="text-grass-element ">{types}</p>
        <p className="text-id-single-view">{id}</p>
      </div>
      <img src={artworkFront} alt="Test Pokemon" />
      <p className="font-lato font-bold text-base">{name}</p>
    </div>
  );
};

export default CardSingle;
